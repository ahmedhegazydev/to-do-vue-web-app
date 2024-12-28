<template>
  <div class="dialog" @click="handleDialogClick">
    <h2 class="dialog-title">What do you want to do?</h2>
    <!-- Input for todo -->
    <div class="date-picker">
      <textarea v-model="todoText" class="todo-input"></textarea>
    </div>

    <!-- Timeframe options -->
    <h3 class="section-title">When do you want to do this?</h3>
    <div class="timeframe-options">
      <button
        v-for="option in timeframeOptions"
        :key="option"
        @click="setTimeframe(option)"
        :class="['timeframe-btn', { active: selectedTimeframe === option }]"
      >
        {{ option }}
      </button>
    </div>

    <!-- Optional fields toggle -->
    <div class="optional-fields">
      <p @click="toggleOptionalFields" class="optional-toggle">
        ▼ Optional fields
      </p>
      <div v-if="showOptionalFields" class="optional-content">
        <!-- Date picker -->
        <div class="field">
          <label for="date" class="field-label">Date</label>
          <div class="date-picker" ref="datePickerContainer">
            <input
              id="date"
              type="text"
              v-model="selectedDate"
              class="input-field"
              placeholder="dd/mm/yyyy"
              @input="handleInput"
            />
            <div @click="showPicker = true" class="calendar-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 5h18v2h-18zm1 3v12h16v-12zm15 10h-14v-8h14zm-3-18v2h-2v-2h-8v2h-2v-2h-1v22h18v-22zm2 22h-18v-22h1v2h2v-2h8v2h2v-2h1z"
                />
              </svg>
            </div>
            <VueDatePicker
              v-if="showPicker"
              :is="VueDatePicker"
              v-model="selectedDate"
              :inline="true"
              @close="showPicker = false"
              :close-on-clear="true"
              :autoPosition="'bottom'"
              :position="'bottom'"
              :enableTimePicker="false"
              class="datepicker-popup"
              :nowButtonLabel="'Today'"
              @update:model-value="updateSelectedDate"
              @clear="clearDate"
              format="dd/MM/yyyy"
            />

            <button class="clear-btn" @click="clearDate">Clear Date</button>
          </div>
        </div>

        <!-- Tags input -->
        <div class="field">
          <div class="field2">
            <label for="tags" class="field-label">Tags</label>
            <label for="tags" class="press-enter">(press Enter to add)</label>
          </div>
          <div class="date-picker">
            <input
              id="tags"
              type="text"
              v-model="tagInput"
              class="input-field"
              @keydown.enter.prevent="addTag"
            />
          </div>

          <div class="tags">
            <span v-for="tag in tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { format } from 'date-fns';

export default {
  name: 'AddTodoDialog',

  props: {
    initialTodo: Object,
  },
  components: {
    VueDatePicker: DatePicker,
  },

  data() {
    return {
      showPicker: false,
      todoText: '',
      timeframeOptions: ['Today', 'This week', 'Eventually'],
      selectedTimeframe: 'Today',
      showOptionalFields: false,
      selectedDate: '',
      tagInput: '',
      tags: [],
    };
  },
  methods: {
    handleInput(event) {
      let input = event.target.value.replace(/[^\d]/g, ''); // Remove non-digit characters
      let formatted = '';

      // Ensure the input length does not exceed 8 characters (ddmmyyyy)
      if (input.length > 8) {
        input = input.slice(0, 8);
      }

      // Format the input as dd/MM/yyyy
      if (input.length <= 2) {
        formatted = input; // Day
      } else if (input.length <= 4) {
        formatted = `${input.slice(0, 2)}/${input.slice(2)}`; // Day/Month
      } else {
        formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(
          4
        )}`; // Day/Month/Year
      }

      // Validate the formatted date
      const [day, month, year] = formatted.split('/').map(Number);

      if (month && (month < 1 || month > 12)) {
        return; // Invalid month: do not update the input
      }

      if (day && month) {
        const daysInMonth = new Date(year || 2023, month, 0).getDate(); // Get days in the given month
        if (day < 1 || day > daysInMonth) {
          return; // Invalid day: do not update the input
        }
      }

      // Only update the formatted date if it's valid

      this.selectedDate = formatted;
    },

    handleDialogClick(event) {
      // Check if the click is outside the date picker container
      const datePickerContainer = this.$refs.datePickerContainer;
      if (
        this.showPicker &&
        datePickerContainer &&
        !datePickerContainer.contains(event.target)
      ) {
        this.showPicker = false; // Close the picker
      }
    },
    setTimeframe(option) {
      this.selectedTimeframe = option;
    },
    toggleOptionalFields() {
      this.showOptionalFields = !this.showOptionalFields;
    },
    updateSelectedDate(value) {
      // Format the date to dd/mm/yyyy
      this.selectedDate = value ? format(new Date(value), 'dd/MM/yyyy') : '';
    },
    formatSelectedDate(rawDate) {
      // Format the raw date value to dd/mm/yyyy
      this.selectedDateRaw = rawDate;
      this.selectedDate = rawDate
        ? format(new Date(rawDate), 'dd/MM/yyyy')
        : '';
    },
    clearDate() {
      this.selectedDate = '';
    },
    addTag() {
      if (this.tagInput.trim()) {
        this.tags.push(this.tagInput.trim());
        this.tagInput = '';
      }
    },
    saveTodo() {
      // console.log('Saving todo:', {
      //   text: this.todoText,
      //   timeframe: this.selectedTimeframe,
      //   date: this.selectedDate,
      //   tags: this.tags,
      // });
      // this.$emit('close');

      this.$emit('update-todo', {
        text: this.todoText,
        timeframe: this.selectedTimeframe,
        date: this.selectedDate,
        tags: this.tags,
      });
    },
  },
};
</script>

<style scoped>
.datepicker-popup {
  position: absolute;
  top: 40px; /* Adjust the position relative to the input */
  z-index: 1000;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: auto;
}

.dialog h2 {
  text-align: left;
  margin: 0;
  align-self: flex-start;
}
.dialog h3 {
  text-align: left;
  margin: 0;
  align-self: flex-start;
}
.dialog-title {
  text-align: left;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.section-title {
  margin: 20px 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #4c4c4c;
}

.todo-input {
  flex: 1;
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  resize: none;
}

.timeframe-options {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.timeframe-btn {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

.timeframe-btn.active {
  background: #5bc08e;
  color: #fff;
}

.optional-fields {
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.optional-toggle {
  cursor: pointer;
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
}

.optional-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}
.field {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}

.field2 {
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
}

.field-label {
  align-self: flex-start;
  margin: 6px 0px 0px 6px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.press-enter {
  align-self: flex-start;
  margin: 6px 0px 0px 6px;
  font-size: 14px;
  color: #c1c1c2;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.date-picker {
  position: relative; /* Position relative for containing the absolute date picker */
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  width: 100%;
}

.clear-btn {
  flex-shrink: 0;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f5f5f5;
  cursor: pointer;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag {
  background: #eee;
  padding: 5px 10px;
  border-radius: 16px;
  font-size: 12px;
  color: #333;
}
</style>

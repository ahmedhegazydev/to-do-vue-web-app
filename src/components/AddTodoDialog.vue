<template>
  <div class="dialog">
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
          <div class="date-picker">
            <input
              id="date"
              type="text"
              v-model="selectedDate"
              class="input-field"
              placeholder="dd/mm/yyyy"
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

    <!-- Actions -->
    <!-- <div class="actions">
      <button class="save-btn" @click="saveTodo">Save Todo</button>
      <button class="cancel-btn" @click="$emit('close')">Cancel</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'AddTodoDialog',
  data() {
    return {
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
    setTimeframe(option) {
      this.selectedTimeframe = option;
    },
    toggleOptionalFields() {
      this.showOptionalFields = !this.showOptionalFields;
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
      console.log('Saving todo:', {
        text: this.todoText,
        timeframe: this.selectedTimeframe,
        date: this.selectedDate,
        tags: this.tags,
      });
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.dialog h2 {
  text-align: left; /* Align text inside <h2> to the left */
  margin: 0; /* Remove default margin */
  align-self: flex-start; /* Explicitly align the <h2> to the start */
}
.dialog h3 {
  text-align: left; /* Align text inside <h2> to the left */
  margin: 0; /* Remove default margin */
  align-self: flex-start; /* Explicitly align the <h2> to the start */
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
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  width: 100%;
}

.clear-btn {
  flex-shrink: 0; /* Prevent the button from shrinking */

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

/* .actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
}

.save-btn {
  padding: 10px 20px;
  background: #5bc08e;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
}

.cancel-btn {
  padding: 10px 20px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
} */
</style>

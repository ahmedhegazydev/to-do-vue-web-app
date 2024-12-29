<template>
  <header class="app-header">
    <div class="flex-column">
      <SettingsButton
        tooltip-content="Settings"
        dialog-close-button-text="Cancel"
      />

      <div class="header-content">
        <h1>{{ currentDate }}</h1>
        <ClearableInput class="search-input" placeholder="Search todos" />

        <RoundedButton
          text="Add Todo"
          buttonType="primary"
          @click="showDialog = true"
        />
        <RoundedButton text="Remove Done" buttonType="secondary" noBg />
      </div>
    </div>

    <!-- Rounded Dialog Component -->
    <RoundedDialog
      v-if="showDialog"
      title=""
      message=""
      :saveButtonText="'Save Todo'"
      :cancelButtonText="'Cancel'"
      @close="handleClose"
      @save="handleSave"
    >
      <AddTodoDialog
        ref="todoDialog"
        :initialTodo="currentTodo"
        :onSave="handleTodoSave"
      />
    </RoundedDialog>
  </header>
</template>

<script>
import ClearableInput from './ClearableInput.vue';
import RoundedButton from './RoundedButton.vue';
import RoundedDialog from './RoundedDialog.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import SettingsButton from './SettingsButton.vue';
import AddTodoDialog from './AddTodoDialog.vue';
// import { useToast } from 'vue-toastification';
// const toast = useToast();

export default {
  name: 'AppHeader',

  components: {
    ClearableInput,
    RoundedButton,
    RoundedDialog,
    SettingsButton,
    AddTodoDialog,
  },
  data() {
    return {
      currentDate: this.formatDate(new Date()),
      showDialog: false,
      currentTodo: {},
    };
  },
  mounted() {
    // localStorage.clear();
  },
  emits: [],

  methods: {
    handleTodoUpdate(updatedTodo) {
      this.currentTodo = updatedTodo;
      console.log('Updated todo:', updatedTodo);
      console.log('Received updated todo:', updatedTodo);
    },
    formatDate(date) {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    handleClose() {
      console.log('Dialog closed');

      // Close the date picker
      this.showPicker = false;
    },
    handleSave() {
      console.log('Save triggered from RoundedDialog');
      // Trigger save in AddTodoDialog
      if (this.$refs.todoDialog) {
        this.$refs.todoDialog.saveTodo();
      }
    },

    handleTodoSave(newTodo) {
      console.log('Todo saved:', newTodo);
      this.currentTodo = newTodo;

      // Save the todo to localStorage or handle it as needed
      const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
      existingTodos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(existingTodos));

      // Close the date picker
      this.showPicker = false;

      // Show toast for all saved todos as strings
      // existingTodos.forEach((todoItem, index) => {
      //   toast.success(`Todo #${index + 1}: ${JSON.stringify(todoItem)}`, {
      //     position: 'top-right',
      //     timeout: 3000,
      //   });
      // });
    },
  },
};
</script>

<style scoped>
.app-header {
  width: 100%;
  padding: 20px 0;
  background-color: #f8f9fa;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

h1 {
  font-size: 24px;
  color: #2c3e50;
  margin: 0;
}

.search-input {
  width: 200px;
  max-width: 300px;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

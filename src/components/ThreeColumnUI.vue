<template>
  <div class="three-column-container">
    <!-- Column for "Today" -->
    <div class="column">
      <div class="div-title-plus">
        <h3>Today</h3>
        <h3 v-if="showPlusIcon.today" class="plus-icon">+</h3>
      </div>

      <div v-if="todayTodos.length === 0">
        <p>Hurray! No more todos for today!</p>
        <button class="add-todo-btn" @click="addTodo('today')">Add Todo</button>
      </div>

      <div v-else>
        <div v-for="(todo, index) in todayTodos" :key="index" class="todo-card">
          <p>{{ todo }}</p>
        </div>
      </div>
    </div>

    <!-- Column for "This Week" -->
    <div class="column">
      <div class="div-title-plus">
        <h3>This week</h3>
        <h3 v-if="showPlusIcon.thisWeek" class="plus-icon">+</h3>
      </div>

      <p>Great! No more todos for this week!</p>
      <button class="add-todo-btn" @click="addTodo('thisWeek')">
        Add Todo
      </button>
    </div>

    <!-- Column for "Eventually" -->
    <div class="column">
      <div class="div-title-plus">
        <h3>Eventually</h3>
        <h3 v-if="showPlusIcon.eventually" class="plus-icon">+</h3>
      </div>
      <p>No other things to do. Good job!</p>
      <button class="add-todo-btn" @click="addTodo('eventually')">
        Add Todo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColumnUI',
  data() {
    return {
      showPlusIcon: {
        today: false,
        thisWeek: false,
        eventually: false,
      },
      todayTodos: [], // Array to store "Today" todos
    };
  },
  methods: {
    addTodo(column) {
      console.log(`Add Todo clicked for: ${column}`);
      // Add your logic to handle the Add Todo action

      // Show the "+" icon for the respective column
      this.showPlusIcon[column] = !this.showPlusIcon[column];
    },

    saveTodosToLocalStorage() {
      // Save todos to local storage
      localStorage.setItem('todayTodos', JSON.stringify(this.todayTodos));
    },
    loadTodosFromLocalStorage() {
      // Load todos from local storage
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      this.todayTodos = savedTodos;
    },
  },

  mounted() {
    this.loadTodosFromLocalStorage();
  },
};
</script>

<style scoped>
.todo-card {
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.plus-icon {
  padding: 0 20px 0 0;
}

.three-column-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  height: calc(100vh - 200px);
}

.column {
  flex: 1;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 0px 0 0 20px;
  text-align: center;
}

.div-title-plus {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column h3 {
  font-size: 1.2em;
  color: #2c3e50;
  margin-bottom: 10px;
  display: flex;
  align-self: start;
}

.column p {
  padding: 20px;
  font-size: 1em;
  color: #7f8c8d;
  margin: 100px 0 0 0;
}

.add-todo-btn {
  background-color: #ecf0f1;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  color: #2c3e50;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-todo-btn:hover {
  background-color: #bdc3c7;
}
</style>

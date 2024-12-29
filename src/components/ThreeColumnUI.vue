<template>
  <div class="three-column-container">
    <!-- Column for "Today" -->
    <div class="column">
      <h3>Today</h3>
      <p>Hurray! No more todos for today!</p>
      <button class="add-todo-btn" @click="addTodo('today')">Add Todo</button>
    </div>

    <!-- Column for "This Week" -->
    <div class="column">
      <h3>This week</h3>
      <p>Great! No more todos for this week!</p>
      <button class="add-todo-btn" @click="addTodo('thisWeek')">
        Add Todo
      </button>
    </div>

    <!-- Column for "Eventually" -->
    <div class="column">
      <h3>Eventually</h3>
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
  methods: {
    addTodo(column) {
      console.log(`Add Todo clicked for: ${column}`);
      // Add your logic to handle the Add Todo action
    },
  },
};
</script>

<style scoped>
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

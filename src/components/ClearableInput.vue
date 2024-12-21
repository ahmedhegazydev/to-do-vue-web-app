<template>
  <div class="input-container">
    <input
      v-model="inputValue"
      type="text"
      :placeholder="placeholder"
      class="input-field"
    />
    <button v-if="inputValue" @click="clearInput" class="clear-btn">
      &times;
      <!-- The 'X' clear icon -->
    </button>
  </div>
</template>

<script>
export default {
  name: 'ClearableInput',
  props: {
    placeholder: {
      type: String,
      default: 'Enter text here...', // Default placeholder if not provided
    },
  },
  data() {
    return {
      inputValue: '', // Holds the input value
    };
  },
  methods: {
    clearInput() {
      this.inputValue = ''; // Clears the input value
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 200;
}

.input-field {
  width: 100%;
  padding: 10px 15px;
  border-radius: 25px; /* Rounded border */
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
}

.clear-btn {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
}

.clear-btn:hover {
  color: #f00; /* Change color when hovering over the X button */
}
</style>

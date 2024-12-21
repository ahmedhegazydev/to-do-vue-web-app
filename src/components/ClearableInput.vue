<template>
  <div class="input-container">
    <input
      v-model="inputValue"
      type="text"
      :placeholder="placeholder"
      class="input-field"
    />
    <!-- Add a button with a tooltip -->
    <button
      v-if="inputValue"
      @click="clearInput"
      class="clear-btn"
      title="Clear search filter"
    >
      &times;
    </button>
  </div>
</template>

<script>
export default {
  name: 'ClearableInput',
  props: {
    placeholder: {
      type: String,
      default: 'Enter text here...',
    },
  },
  data() {
    return {
      inputValue: '',
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
  width: 200px; /* Added px unit */
}

.input-field {
  width: 100%;
  padding: 10px 15px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease; /* Smooth transition */
}

/* Change border color on focus */
.input-field:focus {
  border-color: #4c3c8d; /* Desired focus border color */
}

.clear-btn {
  position: absolute; /* Position adjusted for the tooltip */
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
}

.clear-btn:hover {
  color: #f00;
}

/* Tooltip styles for custom implementation (if needed) */
.clear-btn::after {
  content: attr(title); /* Use the title attribute for content */
  position: absolute;
  top: -30px;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
  white-space: nowrap;
}

.clear-btn:hover::after {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
</style>

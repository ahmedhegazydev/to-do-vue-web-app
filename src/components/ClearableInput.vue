<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import 'tippy.js/dist/tippy.css';

// Props
defineProps({
  placeholder: {
    type: String,
    default: 'Enter text here...',
  },
});

// Emits
const emit = defineEmits(['update:modelValue']);

// Reactive data
const inputValue = ref('');

// Methods
const clearInput = () => {
  inputValue.value = ''; // Clears the input value
  emit('update:modelValue', inputValue.value); // Emit the updated value
};
</script>

<template>
  <div class="input-container">
    <input
      v-model="inputValue"
      type="text"
      :placeholder="placeholder"
      class="input-field"
    />
    <button
      v-if="inputValue"
      @click="clearInput"
      class="clear-btn"
      v-tippy="{ content: 'Clear search filter', placement: 'bottom' }"
    >
      &times;
    </button>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%; /* Flexible width */
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

.input-field:focus {
  border-color: #4c3c8d; /* Desired focus border color */
}

.clear-btn {
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: #aaa;
  cursor: pointer;
}

.clear-btn:hover {
  color: #f00;
  cursor: pointer;
}
</style>

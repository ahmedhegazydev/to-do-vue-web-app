<template>
  <button
    :class="['rounded-btn', buttonType, { 'no-bg': noBg }]"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
    <!-- If no slot content is provided, fallback to the text prop -->
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
  props: {
    text: {
      type: String,
      default: 'Click Me', // Default button text if no slot content is provided
    },
    buttonType: {
      type: String,
      default: 'primary', // You can set different styles based on button type
    },
    noBg: {
      type: Boolean,
      default: false, // Default is false, meaning the button will have a background
    },
  },
  methods: {
    handleClick() {
      this.$emit('click'); // Emit a click event when the button is clicked
    },
  },
};
</script>

<style scoped>
.rounded-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  color: black; /* Ensure text color is black by default */
  transition: background-color 0.3s ease;
}

.rounded-btn.primary {
  background-color: #31ce87;
  color: black; /* Override to white text for primary button */
}

.rounded-btn.secondary {
  background-color: #6c757d;
  color: black; /* Override to white text for secondary button */
}

.rounded-btn.no-bg.primary {
  background-color: transparent; /* No background */
  color: black; /* Override to white text for primary button */
}

.rounded-btn.no-bg.secondary {
  background-color: transparent; /* No background */
  color: black; /* Override to white text for secondary button */
}
</style>

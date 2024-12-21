<template>
  <header class="app-header">
    <div class="header-content">
      <h1>{{ currentDate }}</h1>
      <ClearableInput class="search-input" placeholder="Search todos" />

      <RoundedButton
        text="Add Todo"
        buttonType="primary"
        @click="onSecondaryClick"
      />
      <!-- Button without background -->
      <RoundedButton
        text="Secondary Button"
        buttonType="secondary"
        noBg
        @click="onSecondaryClick"
      />
    </div>
  </header>
</template>

<script>
import ClearableInput from './ClearableInput.vue'; // Make sure to import the ClearableInput component
import RoundedButton from './RoundedButton.vue';

export default {
  name: 'AppHeader',
  components: {
    ClearableInput,
    RoundedButton,
  },
  data() {
    return {
      currentDate: this.formatDate(new Date()),
    };
  },
  methods: {
    // Method to format the current date
    formatDate(date) {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    onPrimaryClick() {
      console.log('Primary button clicked!');
    },
    onSecondaryClick() {
      console.log('Secondary button clicked!');
    },
    onCustomButtonClick() {
      console.log('Custom button clicked!');
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
</style>

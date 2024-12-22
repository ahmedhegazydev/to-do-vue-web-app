<template>
  <header class="app-header">
    <div style="display: flex; flex-direction: column; gap: 20px">
      <button
        class="settings-btn"
        v-tippy="{ content: 'Settings', placement: 'bottom' }"
        @click="showDialog = true"
      >
        <i class="fas fa-cog"></i>
      </button>

      <div class="header-content">
        <h1>{{ currentDate }}</h1>
        <ClearableInput class="search-input" placeholder="Search todos" />

        <RoundedButton
          text="Add Todo"
          buttonType="primary"
          @click="onSecondaryClick"
        />
        <RoundedButton
          text="Remove Done"
          buttonType="secondary"
          noBg
          @click="onSecondaryClick"
        />
      </div>
    </div>

    <!-- Rounded Dialog -->
    <div
      v-if="showDialog"
      class="dialog-backdrop"
      @click.self="showDialog = false"
    >
      <div class="dialog">
        <h2>Settings</h2>
        <p>Here you can adjust your settings.</p>
        <button @click="showDialog = false" class="close-btn">Close</button>
      </div>
    </div>
  </header>
</template>

<script>
import ClearableInput from './ClearableInput.vue';
import RoundedButton from './RoundedButton.vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'AppHeader',
  components: {
    ClearableInput,
    RoundedButton,
  },
  data() {
    return {
      currentDate: this.formatDate(new Date()),
      showDialog: false, // State for showing/hiding dialog
    };
  },
  methods: {
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

.settings-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #000000;
  cursor: pointer;
  align-self: flex-end;
  padding: 10px;
}

.settings-btn:hover {
  color: #4c3c8d;
}

/* Dialog Backdrop */
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Dialog Box */
.dialog {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.dialog h2 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.dialog p {
  margin: 15px 0;
  color: #666;
}

.close-btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background: #4c3c8d;
  color: white;
  cursor: pointer;
}

.close-btn:hover {
  background: #3a2e6b;
}
</style>

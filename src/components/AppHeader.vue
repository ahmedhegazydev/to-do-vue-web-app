<template>
  <header class="app-header">
    <div class="flex-column">
      <SettingsButton
        tooltip-content="Settings"
        dialog-close-button-text="Cancel"
        @click="showDialog = true"
      />

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

    <!-- Rounded Dialog Component -->
    <RoundedDialog
      v-if="showDialog"
      title="Settings"
      message="Here you can adjust your settings."
      close-button-text="Cancel"
      @close="showDialog = false"
    />
  </header>
</template>

<script>
import ClearableInput from './ClearableInput.vue';
import RoundedButton from './RoundedButton.vue';
import RoundedDialog from './RoundedDialog.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import SettingsButton from './SettingsButton.vue';

export default {
  name: 'AppHeader',
  components: {
    ClearableInput,
    RoundedButton,
    RoundedDialog,
    SettingsButton,
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

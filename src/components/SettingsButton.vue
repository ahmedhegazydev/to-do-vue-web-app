<template>
  <div class="flex-column">
    <!-- Settings Button -->
    <button
      class="settings-btn"
      v-tippy="{ content: tooltipContent, placement: tooltipPlacement }"
      @click="onButtonClick"
    >
      <i class="fas fa-cog"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SettingsButton',
  components: {},
  props: {
    tooltipContent: {
      type: String,
      default: 'Settings',
    },
    tooltipPlacement: {
      type: String,
      default: 'bottom',
    },
  },
  data() {
    return {};
  },
  methods: {
    onButtonClick() {
      this.$emit('click'); // Emit click event for parent listeners
    },
  },
};
</script>

<style scoped>
.settings-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: #000;
  cursor: pointer;
  align-self: flex-end;
}

.settings-btn:hover {
  color: #4c3c8d;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

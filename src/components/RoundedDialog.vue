<template>
  <div class="dialog-backdrop" @click.self="onClose">
    <div class="dialog">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <slot></slot>
      <div class="actions">
        <button class="save-btn" @click="onSave">{{ saveButtonText }}</button>
        <button class="cancel-btn" @click="onClose">
          {{ cancelButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundedDialog',
  props: {
    title: {
      type: String,
      default: 'Dialog Title',
    },
    message: {
      type: String,
      default: 'Dialog message goes here.',
    },
    saveButtonText: {
      type: String,
      default: 'Save',
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel',
    },
  },
  emits: ['close', 'save'], // Emit close and save events
  methods: {
    onClose() {
      this.$emit('close'); // Emit close event
    },
    onSave() {
      this.$emit('save'); // Emit save event
    },
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  margin-top: 20px;
  width: 100%;
}

.save-btn {
  padding: 10px 20px;
  background: #5bc08e;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
}

.cancel-btn {
  padding: 10px 20px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  margin: 0 0 0 10px;
}

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

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    __VUE_OPTIONS_API__: true, // Enable Options API (if you're using it)
    __VUE_PROD_DEVTOOLS__: false, // Disable devtools in production
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // Disable hydration mismatch details in production
  },
});

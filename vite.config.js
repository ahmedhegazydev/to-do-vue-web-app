const { defineConfig } = require('@vue/cli-service');
export default defineConfig({
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
});

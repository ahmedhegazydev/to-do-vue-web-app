const { DefinePlugin } = require('webpack');

module.exports = {
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true), // Enable Options API
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // Disable devtools in production
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // Disable hydration mismatch details
    }),
  ],
};

import { createApp } from 'vue';
import App from './App.vue';
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import Toast, { POSITION } from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

const app = createApp(App);

const options = {
  position: POSITION.TOP_LEFT,
  shareAppContext: true,
};

app.use(Toast, options);

app.use(VueTippy, {
  directive: 'tippy',
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false,
      },
    },
  },
});

app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import store from './store';

const options = {
  position: POSITION.TOP_LEFT,
  shareAppContext: true,
};

const app = createApp(App);

app.use(Toast, options);

app.use(store);

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

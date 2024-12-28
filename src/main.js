import { createApp } from 'vue';
import App from './App.vue';
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

app.use(Toast);
app.use(VueTippy, {
  directive: 'tippy', // => v-tippy
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

import { createApp } from 'vue';
import App from './App.vue';
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';

const app = createApp(App);

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

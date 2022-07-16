import { createApp } from 'vue';
import App from './App.vue';
import './input.css';
import './assets/tailwind.css';
import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(FloatingVue);

app.mount('#app');

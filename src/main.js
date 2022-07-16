import { createApp } from 'vue';
import App from './App.vue';
import './input.css';
import './styles/tailwind.css';
import './styles/popperThemes.css';
import router from './router';
import Popper from 'vue3-popper';

const app = createApp(App);
app.component('Popper', Popper);
app.use(router).mount('#app');

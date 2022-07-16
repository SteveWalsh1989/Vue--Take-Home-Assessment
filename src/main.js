import { createApp } from 'vue';
import App from './App.vue';
import './input.css';
import './styles/tailwind.css';
import Popper from 'vue3-popper';
import './styles/popperThemes.css';
const app = createApp(App);
app.component('Popper', Popper);
app.mount('#app');

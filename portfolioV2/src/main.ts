import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Nora from '@primevue/themes/nora';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Nora,
        options: {
            darkModeSelector: false || 'none',
        }
    }
});

app.mount('#app')

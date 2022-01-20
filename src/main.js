import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

window.app = createApp(App).mount('#app')

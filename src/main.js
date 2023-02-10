import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'

createApp(App).use(router).use(Notifications).mount('#app')

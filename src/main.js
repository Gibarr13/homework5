import { createApp } from 'vue'
import '@/style.css'
import router from '@/router'
import App from '@/App.vue'
import composables from './composables'

createApp(App).use(router).mount('#app')

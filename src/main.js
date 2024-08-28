import './assets/main.css'
import '@/assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'


import router from './router'
import Pinia from './store'

const app = createApp(App)


// use and mount and component and custome directive

app.use(Pinia)
app.use(router)
app.mount('#app')

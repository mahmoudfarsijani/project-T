import './assets/main.css'
import '@/assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import Pinia from './store'
import VLazyImage from 'v-lazy-image'
// import vuetify from './plugins/vuetify'

// import 'vuetify/styles'

// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
 
// const  vuetifyy = createVuetify({
//     components,
//     directives
// })

const app = createApp(App)

// custome hook directive

// const changeWidth = {
//     mounted(el,binding) {
//         const resizeHandler = () => {

//         }
//     }
// }

// use and mount and component and custome directive

app.use(router)
app.use(Pinia)
// app.use(vuetifyy)
app.component('v-lazy-image', VLazyImage)
app.mount('#app')

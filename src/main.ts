import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'vue3-toastify/dist/index.css'
import Vue3Toastify from 'vue3-toastify'

const app = createApp(App) 
const pinia = createPinia()

app.use(pinia)             
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
  toastClassName: 'custom-toast', // ← aplica a todos los toast por defecto
  theme: 'dark'
})





app.mount('#app')          

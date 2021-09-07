import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidationPlugin from './includes/validation'
import Icon from './directives/icon'
import { auth } from './includes/firebase'
import './assets/tailwind.css'
import './assets/main.css'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(store)
    app.use(router)
    app.use(VeeValidationPlugin)
    app.directive('icon', Icon)
    app.mount('#app')
  }
})

/* eslint-disable semi */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidationPlugin from './includes/validation'
import Icon from './directives/icon'
import { auth } from './includes/firebase'
import './assets/tailwind.css'
import './assets/main.css'
import i18n from './includes/i18n'
import './registerServiceWorker'
import GlobalComponents from './includes/_globals'
import ProgessBar from './includes/progress-bar'
import 'nprogress/nprogress.css'

ProgessBar(router)

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n)
    app.use(store)
    app.use(router)
    app.use(VeeValidationPlugin)
    app.use(GlobalComponents)
    app.directive('icon', Icon)
    app.mount('#app')
  }
})

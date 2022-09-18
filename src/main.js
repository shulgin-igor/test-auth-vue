import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

if(process.env.VUE_APP_MSW_ENABLED) {
  const { worker } = require('./mocks/browser')
  worker.start()
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$BASE_URL = 'http://localhost:3000'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueGapi from 'vue-gapi'

Vue.config.productionTip = false
Vue.use(VueGapi, {})

new Vue({
  render: h => h(App),
}).$mount('#app')

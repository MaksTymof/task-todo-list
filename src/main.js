import Vue from 'vue'
import App from './App.vue'
import router from './router'
import titleMixin from '../mixins/titleMixin'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faMinusCircle, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThList)
library.add(faMinusCircle)
library.add(faPencilAlt)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

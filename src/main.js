import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser, faPlayCircle, faExclamationCircle, faAppleAlt, faMapMarkedAlt, faGift, faCreditCard, faTicketAlt, faLocationArrow, faEnvelope, faPhone, faEnvelopeOpenText, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faPinterest
  } from "@fortawesome/free-brands-svg-icons" //fab
  

library.add(faCoffee,faUser,faPlayCircle,faExclamationCircle,faAppleAlt,faMapMarkedAlt,faGift,faCreditCard,faTicketAlt,faLocationArrow,faEnvelope,faPhone,faEnvelopeOpenText)
library.add(faTwitter, faFacebookF, faGooglePlusG,faPinterest) //fab
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

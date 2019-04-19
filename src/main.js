import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretSquareRight, faCaretSquareLeft } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faArrowRight, faMapMarkerAlt, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import es from '@/lang/es.json';
import en from '@/lang/en.json';

library.add(faCircle, faArrowRight, faMapMarkerAlt, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    // scrollToComponent: function(element) {
    //   document.getElementById(element).scrollIntoView({behavior: "smooth"});
    // },
    getElementY: function(element) {
      let elem = document.getElementById(element),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return (elem.getBoundingClientRect().top + scrollTop + elem.scrollHeight - 50);
    }
  }
})

var i18n = new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'es',
  messages: { es, en } //set locale messages
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

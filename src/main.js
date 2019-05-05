import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretSquareRight, faCaretSquareLeft } from '@fortawesome/free-regular-svg-icons';
import { faGlobeAmericas, faCircle, faArrowRight, faMapMarkerAlt, faAngleUp, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import es from '@/lang/es.json';
import en from '@/lang/en.json';

library.add(faGlobeAmericas, faCircle, faArrowRight, faMapMarkerAlt, faAngleUp, faAngleRight, faAngleLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    scrollToComponent: function(element) {
      document.getElementById(element).scrollIntoView({behavior: "smooth"});
    },
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

Number.prototype.between = function(a, b, inclusive) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return inclusive ? this >= min && this <= max : this > min && this < max;
}

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

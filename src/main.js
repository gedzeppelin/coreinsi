import Vue from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
import VueI18n from 'vue-i18n';
import { VueHammer } from 'vue2-hammer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight, faArrowAltCircleLeft  } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faChevronCircleUp, faGlobeAmericas, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import es from '@/lang/es.json';
import en from '@/lang/en.json';

library.add(faArrowAltCircleRight, faArrowAltCircleLeft,
          faArrowRight, faChevronCircleUp, faGlobeAmericas, faMapMarkerAlt,
          faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

VueHammer.config.swipe = {
  threshold: 100,
  direction: 6,
}

Vue.use(VueI18n)
Vue.use(VueHammer)

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
// Vue.prototype.moment = moment;

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

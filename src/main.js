import Vue from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
import { VueHammer } from 'vue2-hammer';

import VueI18n from 'vue-i18n';
import messages from '@/lang/es';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleRight, faArrowAltCircleLeft  } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faArrowUp, faCircle, faGlobeAmericas, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowAltCircleRight, faArrowAltCircleLeft,
          faArrowRight, faArrowUp, faCircle, faGlobeAmericas, faMapMarkerAlt,
          faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

VueHammer.config.swipe = {
  threshold: 100,
  direction: 6,
}

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'es',
  messages //set locale messages
});

const loadedLanguages = ['es']; // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

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
    },
    loadLanguageAsync: function(lang) {
      if (i18n.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
          return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then(msgs => {
            i18n.setLocaleMessage(lang, msgs.default)
            loadedLanguages.push(lang)
            return setI18nLanguage(lang)
          })
        }
        return Promise.resolve(setI18nLanguage(lang))
      }
      return Promise.resolve(lang)
    }
  }
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

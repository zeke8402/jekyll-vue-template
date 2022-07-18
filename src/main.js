import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import SplashPage from './components/SplashPage.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('helloWorld', HelloWorld)
Vue.component('splashPage', SplashPage)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})

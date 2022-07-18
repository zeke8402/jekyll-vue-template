import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import SplashPage from './components/SplashPage.vue'

Vue.component('helloWorld', HelloWorld)
Vue.component('splashPage', SplashPage)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import UserHeader from './components/UserHeader.vue'
import UserFooter from './components/UserFooter.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import swal from 'vue-sweetalert'
import Toasted from 'vue-toasted';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(swal)
Vue.use(Toasted)

// Global methods and events
Vue.mixin({
    methods: {
    }
})

new Vue({
    el: '#app',
    router,
    components: { App, UserHeader, UserFooter },
    template: '<App/>'
})

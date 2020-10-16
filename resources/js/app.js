require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './router'
import App from './src/App.vue'
import MyPlugins from './src/plugins/myPlugins'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueRouter)
Vue.use(Vuetify, {
    icons: {
        iconfont: "mdi"
    }
});
Vue.use(MyPlugins)

const app = new Vue({
    el: "#app",
    router: Routes,
    vuetify: new Vuetify(),
    render: h => h(App)
});

export default app

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import VueRouter from 'vue-router'
import routes from './router/routers'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/reset.css'
import './style/mycss.css'
import Resource from 'vue-resource'
import {Switch} from 'mint-ui'
import axios from "axios"

const url =process.env.API_ROOT;
axios.defaults.baseURL = url; // 关键步骤–填写后台请求统一的地址
Vue.prototype.$https = axios;

Vue.use(Resource)
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(Switch.name,Switch)


const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.prototype.$rdNum = function(value,Dec){
  return value ? (parseFloat(value)).toFixed(Dec?Dec:2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : 0;
  };

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

//
new Vue({
  //el:'#app',
  store,
  router,
  render:h=>h(App)
}).$mount("#app");

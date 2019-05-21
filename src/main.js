import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store";
import axios from "axios"
import VueAxios from 'vue-axios'
import restcss from "./css/cssreset.css"
import ElementUI from 'element-ui';
import './assets/fonts/iconfont.css'
import './assets/font_4umdkupi80f/iconfont.css'
import './assets/font_19etqaqu6zg/iconfont.css'


require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  error: require('./assets/error.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

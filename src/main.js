import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Antd);

Vue.prototype.axios = axios
axios.defaults.baseURL = '/report'

Vue.filter("dictionary", function(code, type){
  var data = store.state.dictionary;
  
  let result = code;
  for(var i=0;i<data.length;i++){
    if(data[i].类型名称 == type && data[i].编号 == code){
      result = data[i].值;
      break;
    }
  }
  return result;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

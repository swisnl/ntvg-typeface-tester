import Vue from 'vue';
import App from './App.vue';
import scrollDir from 'scrolldir';

scrollDir({ dir: 'up' });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

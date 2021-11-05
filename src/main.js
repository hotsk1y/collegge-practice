import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// task 2 LS 1
const cars = [
  "bmw",
  "tesla",
  "mercedes",
];
localStorage.setItem('array', JSON.stringify(cars));
const arrayFromLS = JSON.parse(localStorage.getItem('array'));
console.log(arrayFromLS);

// task4 LS 1
for (let key, i = 0; i < localStorage.length; i++) {
  key = localStorage.key(i);
  console.log(key, ':', localStorage.getItem(key));
}

new Vue({
  render: h => h(App),
}).$mount('#app')

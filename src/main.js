// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// import He from './components/He'

// Vue.component('he-comp1',{
// 	template: '<div>I am {{name}}</div>',
// 	data(){
// 		return{
// 			name:'Jack'
// 		}
// 	}
// })

new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})

import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/', 
		component: resolve => require(['@/page/Index'], resolve)
	},{
		path: '/user', 
		component: resolve => require(['@/page/User'], resolve)
	},{
		path: '/notice', 
		component: resolve => require(['@/page/Notice'], resolve)
	},{
		path: '/codeshop', 
		component: resolve => require(['@/webapp/codeshop/Index'], resolve)
	},{
		path: '/codeshop/add', 
		component: resolve => require(['@/webapp/codeshop/Add'], resolve)
	}]
})
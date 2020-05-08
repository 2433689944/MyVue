import Vue from 'vue'
import VueRouter from 'vue-router'
import Tab from '../views/Tab.vue'
import {Message} from 'element-ui';
Vue.prototype.$message = Message;

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Tab,
		children: [{
				path: '/',
				component: () => import('../views/Home.vue'),
			}, {
				path: 'details',
				component: () => import('../views/Details.vue'),
			}, {
				path: 'car',
				component: () => import('../views/Car.vue'),
			}, {
				path: 'settlement',
				component: () => import('../views/Settlement.vue'),
			}, {
				path: 'success',
				component: () => import('../views/Success.vue')
			}, {
				path: 'grelease',
				component: () => import('../views/Grelease.vue'),
			}, {
				path: 'crelease',
				component: () => import('../views/Crelease.vue'),
			}, {
				path: 'community',
				component: () => import('../views/Community.vue'),
			}, {
				path: 'pcenter',
				component: () => import('../views/Pcenter.vue'),
			},
		]
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/register',
		component: () => import('../views/Register.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//全局守卫
router.beforeEach((to, from, next) => {
	//用户未登录只能访问首页、登录注册页面
	if (to.path == "/" || to.path == "/login" || to.path == "/register") {
		next();
	} else {
		//去其他页面判断是否登录
		let flag = window.localStorage.getItem("email");
		//登录过直接放行
		if (flag) {
			next()
		} else {
			//未登录则跳转到首页
			Message({
				message: '您尚未登录哦，请先登录！',
				type: 'warning',
				duration: 1500
			});
			next("/");
		}
	}
})
//控制路由跳转后页面回到顶部
router.afterEach(() => {
	window.scrollTo(0, 0)
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Tab from '../views/Tab.vue'

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
		}, ]
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

export default router

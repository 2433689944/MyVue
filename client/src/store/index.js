import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {
		username: '', //用户名
		headpic: '' //头像
	},
	mutations: {
		getuserInfo(state, userInfo) {
			console.log(userInfo.username,userInfo.headpic)
			state.username = userInfo.username;
			state.headpic = userInfo.headpic;
		}
	},
	actions: {

	},
	getters: {

	}
})

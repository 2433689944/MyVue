import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	state: {
		username: '', //用户名
		headpic: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', //默认头像
		goodslist: [], //商品数据
		unreadmsg: [], //未读消息
		readmsg: [], //已读消息
		unreadcom:[],//未读评论
		readcom: [], //已读评论
	},
	mutations: {
		getuserInfo(state, userInfo) {
			state.username = userInfo.username;
			state.headpic = userInfo.headpic;
		},
		loginout(state) {
			state.username = '';
			state.headpic = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
			state.unreadmsg = [];
			state.readmsg = [];
			state.unreadcom = [];
			state.readcom = [];
		},
		getAllGoods(state, allgoods) {
			state.goodslist = allgoods;
		},
		updatamsg(state, msg) {
			// console.log(msg)
			state.unreadmsg = msg.info;
			state.readmsg = msg.info2;
		},
		updatacom(state, msg) {
			// console.log(msg)
			state.unreadcom = msg.info;
			state.readcom = msg.info2;
		},
	},
	actions: {

	},
	getters: {

	}
})

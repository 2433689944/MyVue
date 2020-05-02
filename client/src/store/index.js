import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from './ModuleA.js'
import ModuleB from './ModuleB.js'
import ModuleC from './ModuleC.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		a: ModuleA,
		b: ModuleB,
		c: ModuleC
	}
})

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import pic from './module/pic'
const modules = {
    pic
}

const store = new Vuex.Store({
    modules
})

export default store
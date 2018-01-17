import {
    PIC
} from '../mutation-types'

const state = {
    pic: []
}

const mutations = {
    [PIC.GET_DATA](state, data) {
        state.pic = data
    },
    [PIC.ADD_DATA](state, data) {
        state.pic = data
    }
}
const getters = {
    list: state => state.list
}
export default {
    state,
    mutations,
    getters
}
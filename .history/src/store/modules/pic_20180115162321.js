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
    pic: state => state.pic
}
export default {
    state,
    mutations,
    getters
}
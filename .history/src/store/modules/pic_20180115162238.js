import {
    PIC
} from '../mutation-types'

const state = {
    PIC: []
}

const mutations = {
    [LIST.GET_DATA](state, data) {
        state.list = data
    },
    [LIST.ADD_DATA](state, data) {
        state.list = data
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
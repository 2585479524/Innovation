import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"

Vue.use(Vuex)

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REWBER_ANSWER'
const INITDATA = 'INITDATA'

export default new Vuex.Store({

    state: {
        userName: '',
        isLogin: '',

    },

    mutations: {

        update(state, loginForm) {
            state.userName = loginForm.num;

        },
    },

    actions: {}
});
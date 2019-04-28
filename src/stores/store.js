import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"

Vue.use(Vuex)

const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REWBER_ANSWER'
const INITDATA = 'INITDATA'

export default new Vuex.Store({

    state: {
        // data: [],
        //用户信息
        userName: '',
        isLogin: '',
        // T&#^!&6@$...
        // itemNum: 1,
        // userAnswer: [],
        // itemDetail: [{
        //         'answer_id': '1',
        //         'answer_index': '第一题',
        //         'answer_title': '一天多少小时？',
        //         'userChoose': '',
        //         'options_list': [
        //             { 'answer_id': '1', 'options_id': '01', 'options_title': '24小时' },
        //             { 'answer_id': '1', 'options_id': '02', 'options_title': '13小时' },
        //             { 'answer_id': '1', 'options_id': '03', 'options_title': '23小时' },
        //             { 'answer_id': '1', 'options_id': '04', 'options_title': '21小时' },
        //         ]
        //     },
        //     {
        //         'answer_id': '2',
        //         'answer_index': '第二题',
        //         'answer_title': '一小时多少分钟？',
        //         'options_list': [
        //             { 'answer_id': '2', 'options_id': '01', 'options_title': '60分钟' },
        //             { 'answer_id': '2', 'options_id': '02', 'options_title': '13分钟' },
        //             { 'answer_id': '2', 'options_id': '03', 'options_title': '23分钟' },
        //             { 'answer_id': '2', 'options_id': '04', 'options_title': '21分钟' },
        //         ]
        //     },
        //     {
        //         'answer_id': '3',
        //         'answer_index': '第三题',
        //         'answer_title': '一分钟多少秒？',
        //         'options_list': [
        //             { 'answer_id': '3', 'options_id': '01', 'options_title': '60秒' },
        //             { 'answer_id': '3', 'options_id': '02', 'options_title': '13秒' },
        //             { 'answer_id': '3', 'options_id': '03', 'options_title': '23秒' },
        //             { 'answer_id': '3', 'options_id': '04', 'options_title': '21秒' },
        //         ]
        //     },
        //     {
        //         'answer_id': '4',
        //         'answer_index': '第四题',
        //         'answer_title': '一秒多少毫秒？',
        //         'options_list': [
        //             { 'answer_id': '4', 'options_id': '01', 'options_title': '1000ms' },
        //             { 'answer_id': '4', 'options_id': '02', 'options_title': '1001ms' },
        //             { 'answer_id': '4', 'options_id': '03', 'options_title': '2000ms' },
        //             { 'answer_id': '4', 'options_id': '04', 'options_title': '1003ms' },
        //         ]
        //     },
        // ]
    },

    mutations: {

        // 这里为ajax
        // getdata(state, res) {
        //     state.data = res
        //     console.log(state.data)
        // },


        // [ADD_ITEMNUM](state) {
        //     if (this.state.itemNum < this.state.itemDetail.length) {
        //         this.state.itemNum += 1;
        //     }
        // },
        // [REMBER_ANSWER](state, id) {
        //     this.state.userAnswer.push(id);
        // },
        // [INITDATA](state) {
        //     this.state.itemNum = 1;
        //     this.state.userAnswer = [];
        // },

        update(state, loginForm) {
            state.userName = loginForm.num;

        },
    },

    actions: {
        // getdata(context) {  这里为ajax
        //     axios.get('http://39.107.102.246/exam/final/{考试ID}')
        //         .then((res) => {
        //             context.commit('getdata', res)
        //         })
        // }
        // addNum(store, id) {
        //     store.commit(REMBER_ANSWER, id)
        //     store.commit(ADD_ITEMNUM)
        //     console.log(store.state.itemNum);
        // },
        // initData(store) {
        //     store.commit(INITDATA);
        // },

    }
});
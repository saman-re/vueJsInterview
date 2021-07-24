import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    experts:[
      {
      name:'saman',
      id:0,
      return:10.4,
      risk:2
    },
    {
      name:'saman',
      id:1,
      return:-10.4,
      risk:5
    },
    {
      name:'saman',
      id:2,
      return:0,
      risk:2
    },
    {
      name:'saman',
      id:3,
      return:10.4,
      risk:2
    },
    {
      name:'saman',
      id:4,
      return:10.4,
      risk:8
    },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});

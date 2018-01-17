/**
 * Created by zhangjian on 2018/1/16.
 */
import * as types from './mutation-types';
import api from '../assets/api';
export default {
  getData({commit}, data) {
    api.getData().then((res) => {
      commit(types.GET_DATA, res.data.data.liveWodList);
    })
  }
};

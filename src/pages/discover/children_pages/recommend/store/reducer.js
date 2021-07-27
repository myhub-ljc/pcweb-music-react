//这里我们依然做的是浅层比较，如果想要做一个深层比较的话，便可以使用fromjs
import { Map } from 'immutable';

//我在这里一次性将所有导入(也可以一个一个导入)
import * as actionTypes from './constants';

//这里使用immutableJS进行一个包裹
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  orignRanking: {}
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      //这里就是immutable.js的语法(set)最终会返回一个新的对象
      return state.set("topBanners", action.topBanners);
      // return {...state, topBanners: action.topBanners}
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGN_RANKING:
      return state.set("orignRanking", action.orignRanking);
    default: 
      return state;
  }
}

export default reducer;
import { Map } from 'immutable';

//我在这里一次性将所有导入(也可以一个一个导入)
import * as actionTypes from './constants';

//这里到时根据具体的情况使用map或者formjs(具体可查github)
const defaultState = Map({
  topBanners: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      //这里就是immutable.js的语法(set)
      return state.set("topBanners", action.topBanners);
      // return {...state, topBanners: action.topBanners}
    default: 
      return state;
  }
}

export default reducer;
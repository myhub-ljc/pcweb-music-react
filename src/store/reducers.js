import { combineReducers } from 'redux';

//将每一个reducer做一个导入
import { reducer as recommendReducer } from '@/pages/discover/children_pages/recommend/store/index.js';

const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;
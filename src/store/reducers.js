import { combineReducers } from 'redux-immutable';

//将每一个reducer做一个导入(为了避免导入别的reducer后冲突，因此最好重命名一下)
//这里先将recommend里的reducer做一个导入
import { reducer as recommendReducer } from '@/pages/discover/children_pages/recommend/store/index.js';

const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;
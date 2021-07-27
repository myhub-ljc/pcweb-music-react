//包括我们其实也是需要对reducers做一个比较的，这里我们直接从redux-immutable引入，不再从redux直接引入了
import { combineReducers } from 'redux-immutable';

//将每一个reducer做一个导入(为了避免导入别的reducer后冲突，因此最好重命名一下)
//这里先将recommend里的reducer做一个导入
import { reducer as recommendReducer } from '@/pages/discover/children_pages/recommend/store/index.js';

const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;
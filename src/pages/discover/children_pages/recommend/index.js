import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

function JCRecommend(props) {

  //组件和redux关联目的是获取数据和进行dispatch操作(而这里必须要传入第二个参数shallowEqual是为了要求做一个浅层比较)
  const { topBanners } = useSelector(state => ({
    //因为使用了immutable.js，因此当然要使用get啦(最外层的reducer也是使用了哦);
    // topBanners: state.get("recommend").get("topBanners")
    //当然了如果嫌弃上面这样写麻烦的话也可以使用下面这种写法也是可以滴
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch();

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>HYRecommend: {topBanners.length}</h2>
    </div>
  )
}

export default memo(JCRecommend);

// function JCRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       <h2>HYRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
  //state是整个合并起来的reducer
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(JCRecommend));
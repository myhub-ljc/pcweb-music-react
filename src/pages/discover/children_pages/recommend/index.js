import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

function JCRecommend(props) {

  //组件和redux关联: 获取数据和进行dispatch操作(而这里必须要传入第二个参数shallowEqual是为了要求做一个浅层比较)
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.get("topBanners")
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
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(JCRecommend));
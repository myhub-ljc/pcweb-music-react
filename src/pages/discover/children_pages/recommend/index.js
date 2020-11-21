import React, { memo } from 'react';

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
 } from './style';
import JCTopBanners from './c-cpns/top-banner/index';
import JCHotRecommend from './c-cpns/hot-recommend/index';
import JCNewAlbum from './c-cpns/new-album/index';
import JCRanking from './c-cpns/recommend-ranking/index';

function JCRecommend(props) {
  return (
    <RecommendWrapper>
     <JCTopBanners/>
     <Content className="wrap-v2">
       <RecommendLeft>
          <JCHotRecommend/>
          <JCNewAlbum/>
          <JCRanking/>
       </RecommendLeft>
       <RecommendRight>

       </RecommendRight>
     </Content>
    </RecommendWrapper>
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
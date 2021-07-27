import * as actionTypes from './constants';

import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList
 } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOrignRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGN_RANKING,
  orignRanking: res.playlist
})
 
//从页面组件中将请求回来的数据派发到createAction中，然后再保存到reducer中去
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(10).then(res => {
      dispatch(changeNewAlbumAction(res));
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
        switch(idx) {
          case 0:
            dispatch(changeNewRankingAction(res));
            break;
          case 2: 
            dispatch(changeOrignRankingAction(res));
            break;
          case 3: 
            dispatch(changeUpRankingAction(res));  
            break;
          default:
            console.log("其他数据处理");
        }
      }
    )
  }
}
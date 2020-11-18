import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

//从index.js中将请求回来的数据派发到createAction中，然后再保存到reducer中去
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
}
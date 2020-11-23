//我会在这里专门发起recommend网络请求
import request from './request';

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

//先来services封装我们的网络请求的函数(这里的limit让使用者决定传入多少条数据)
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

//封装我们新碟上架的网络请求函数
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

//封装我们的榜单的网络请求函数
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}
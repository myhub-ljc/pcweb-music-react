//我会在这里专门发起recommend网络请求
import request from './request';

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}
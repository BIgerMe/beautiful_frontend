import request from '@/utils/request'

export function createGoods(data) {
  return request({
    url: '/z/shopping/createGoods',
    method: 'post',
    data
  })
}

export function categoryList() {
  return request({
    url: '/z/shopping/categoryList',
    method: 'get',
  })
}

export function goodsLists(data) {
  return request({
    url: '/z/shopping/goodsLists',
    method: 'get',
    params:data
  })
}


import request from '@/utils/request'

/*新增商品*/
export function createGoods(data) {
  return request({
    url: '/z/shopping/createGoods',
    method: 'post',
    data
  })
}
//更新商品
export function updateGoods(data) {
  return request({
    url: '/z/shopping/updateGoods',
    method: 'post',
    data
  })
}
//商品分类列表
export function categoryList() {
  return request({
    url: '/z/shopping/categoryList',
    method: 'get',
  })
}
//商品列表
export function goodsLists(data) {
  return request({
    url: '/z/shopping/goodsLists',
    method: 'get',
    params:data
  })
}


import request from '@/utils/request'

export function categoryCY() {
  return request({
    url: '/z/blog/categoryCY',
    method: 'get'
  })
}

export function lists(data) {
  return request({
    url: '/z/blog/lists',
    method: 'get',
    data
  })
}

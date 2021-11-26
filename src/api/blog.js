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
    method: 'post',
    data
  })
}

export function detail(data) {
  return request({
    url: '/z/blog/detail',
    method: 'post',
    data
  })
}



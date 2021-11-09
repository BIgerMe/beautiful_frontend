import request from '@/utils/request'

export function categoryCY() {
  return request({
    url: '/z/blog/categoryCY',
    method: 'get'
  })
}

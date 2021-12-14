import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/z/nav/getList',
    method: 'get',
    data,
  })
}

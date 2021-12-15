import request from '@/utils/request'

export function categoryCY() {
  return request({
    url: '/z/blog/categoryCY',
    method: 'get',
  })
}

export function lists(data) {
  return request({
    url: '/z/blog/lists',
    method: 'post',
    data,
  })
}

export function detail(data) {
  return request({
    url: '/z/blog/detail',
    method: 'post',
    data,
  })
}

export function selfCategoryCY() {
  return request({
    url: '/z/blog/selfCategoryCY',
    method: 'get',
  })
}

export function selfLists(data) {
  return request({
    url: '/z/blog/selfLists',
    method: 'post',
    data,
  })
}

export function createBlog(data) {
  return request({
    url: '/z/blog/create',
    method: 'post',
    data,
  })
}
export function updateBlog(data) {
  return request({
    url: '/z/blog/update',
    method: 'post',
    data,
  })
}

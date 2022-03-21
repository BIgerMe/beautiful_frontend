import request from '@/utils/request'

export function uploadImg(formData) {
  return request({
    url: '/z/qiniu/uploadImg',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data:formData,
  })
}

export function getAttachment(data) {
  return request({
    url: '/z/qiniu/getAttachment',
    method: 'get',
    params:data
  })
}

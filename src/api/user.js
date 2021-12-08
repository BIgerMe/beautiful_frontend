import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenName } from '@/config'

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: '/z/user/login',
    method: 'post',
    data,
  })
}

export function getUserInfo(accessToken) {
  return request({
    url: '/z/user/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/z/user/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/z/user/register',
    method: 'post',
  })
}

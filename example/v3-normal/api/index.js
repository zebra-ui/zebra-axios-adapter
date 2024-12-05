import axiosInstance, { request } from '../utils/request'

export function createUser(data) {
  return axiosInstance({
    url: '/users',
    method: 'post',
    data
  })
}

export function getUser(params) {
  return axiosInstance({
    url: `/users`,
    method: 'get',
    params
  })
}

export function uploadFile(data) {
  return axiosInstance({
    url: `https://postman-echo.com/post`,
    method: 'upload',
    data
  })
}

export function downloadFile() {
  return axiosInstance({
    url: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
    method: 'download'
  })
}

// 示例 API
export const api = {
  // GET 请求示例
  getUser: (id) => {
    return request.get(`/users/${id}`)
  },

  // POST 请求示例
  createUser: (data) => {
    return request.post('/users', data)
  },

  // 上传文件示例
  uploadFile: (filePath, formData) => {
    return request.upload('https://postman-echo.com/post', filePath, {
      name: 'file',
      formData
    })
  },

  // 下载文件示例
  downloadFile: (url) => {
    return request.download(url, '', {
      onProgressUpdate: (progress) => {
        console.log('下载进度：', progress.progress)
      }
    })
  }
}

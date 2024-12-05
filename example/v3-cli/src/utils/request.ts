import axios from 'axios'
import { uniappAdapter, createRequest } from '@zebra-ui/axios-adapter'

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  adapter: uniappAdapter
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在这里可以添加token等通用请求头
    // config.headers = {
    //   token: "1234567890",
    // };
    console.log('请求配置：', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 可以统一处理响应数据
    return response.data
  },
  (error) => {
    console.log('error', error)
    // 统一错误处理
    uni.showToast({
      title: error.message || '请求失败',
      icon: 'none'
    })
    return Promise.reject(error)
  }
)

// 创建请求工具
export const request = createRequest(axiosInstance)
export default axiosInstance

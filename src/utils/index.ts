import { AxiosInstance } from 'axios'
import { UniAppRequestConfig } from '../core/types'

export interface RequestOptions
  extends Partial<
    Omit<UniAppRequestConfig, 'url' | 'method' | 'data' | 'params'>
  > {}

export function createRequest(instance: AxiosInstance) {
  return {
    /**
     * GET请求
     * @param url 请求地址
     * @param params 请求参数
     * @param options 其他配置项
     */
    get: (url: string, params?: any, options?: RequestOptions) => {
      return instance.request({
        url,
        method: 'get',
        params,
        ...options
      })
    },

    /**
     * POST请求
     * @param url 请求地址
     * @param data 请求数据
     * @param options 其他配置项
     */
    post: (url: string, data?: any, options?: RequestOptions) => {
      return instance.request({
        url,
        method: 'post',
        data,
        ...options
      })
    },

    /**
     * PUT请求
     * @param url 请求地址
     * @param data 请求数据
     * @param options 其他配置项
     */
    put: (url: string, data?: any, options?: RequestOptions) => {
      return instance.request({
        url,
        method: 'put',
        data,
        ...options
      })
    },

    /**
     * DELETE请求
     * @param url 请求地址
     * @param params 请求参数
     * @param options 其他配置项
     */
    delete: (url: string, params?: any, options?: RequestOptions) => {
      return instance.request({
        url,
        method: 'delete',
        params,
        ...options
      })
    },

    /**
     * 上传文件
     * @param url 请求地址
     * @param file 文件对象或路径
     * @param options 其他配置项
     */
    upload: (
      url: string,
      file: File | string,
      options?: RequestOptions & {
        name?: string
        formData?: Record<string, any>
      }
    ) => {
      return instance.request({
        url,
        method: 'upload',
        data: file,
        ...options
      })
    },

    /**
     * 下载文件
     * @param url 请求地址
     * @param filePath 保存路径
     * @param options 其他配置项
     */
    download: (url: string, filePath: string, options?: RequestOptions) => {
      return instance.request({
        url,
        method: 'download',
        filePath,
        ...options
      })
    }
  }
}

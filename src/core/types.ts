import type { InternalAxiosRequestConfig } from 'axios'

// UniApp 请求配置
export interface UniAppRequestConfig extends InternalAxiosRequestConfig {
  name?: string
  filePath?: string
  formData?: Record<string, any>
  data?: string | UploadFileConfig | any
  onProgressUpdate?: (result: {
    progress: number
    totalBytesSent?: number
    totalBytesExpectedToSend?: number
    totalBytesWritten?: number
    totalBytesExpectedToWrite?: number
  }) => void
}

// UniApp 响应类型
export interface UniAppResponse<T = any> {
  data: T
  statusCode: number
  header: Record<string, string>
  cookies: string[]
  tempFilePath?: string
  tempFiles?: Array<{
    path: string
    size: number
  }>
}

// 错误响应类型
export interface ErrorResponse {
  status: number
  data: any
  headers: Record<string, string>
  config: UniAppRequestConfig
}

// 添加上传文件配置类型
export interface UploadFileConfig {
  filePath: string
  name?: string
  formData?: Record<string, any>
}

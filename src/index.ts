export type {
  UniAppRequestConfig,
  UniAppResponse,
  ErrorResponse
} from './core/types'
export { default as uniappAdapter } from './core/adapter'
export { createRequest } from './utils'
export { createUniAppAdapter } from './core/adapter'

// 导出默认适配器
export { default } from './core/adapter'

/// <reference types="@dcloudio/types" />

declare namespace UniApp {
  interface RequestOptions {
    url: string
    data?: string | object | ArrayBuffer
    header?: any
    method?:
      | 'GET'
      | 'POST'
      | 'PUT'
      | 'DELETE'
      | 'CONNECT'
      | 'HEAD'
      | 'OPTIONS'
      | 'TRACE'
    timeout?: number
    dataType?: string
    responseType?: string
    withCredentials?: boolean
    success?: (res: any) => void
    fail?: (err: any) => void
  }

  interface UploadFileOption {
    url: string
    filePath: string
    name: string
    header?: any
    formData?: any
    timeout?: number
    success?: (res: any) => void
    fail?: (err: any) => void
  }

  interface DownloadFileOption {
    url: string
    header?: any
    timeout?: number
    filePath?: string
    success?: (res: any) => void
    fail?: (err: any) => void
  }
}

declare const uni: {
  request: (options: UniApp.RequestOptions) => void
  uploadFile: (options: UniApp.UploadFileOption) => {
    onProgressUpdate?: (callback: (res: any) => void) => void
  }
  downloadFile: (options: UniApp.DownloadFileOption) => {
    onProgressUpdate?: (callback: (res: any) => void) => void
  }
}

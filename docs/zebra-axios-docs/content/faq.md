# 常见问题

### 1. 上传文件时报错 "Upload method requires data"

这个错误通常出现在使用上传功能但没有正确提供文件数据时。上传文件有两种方式：

#### 方式一：直接传递文件路径

```js
axios.request({
  method: 'upload',
  url: '/upload',
  data: '/path/to/file.jpg',  // 直接传递文件路径字符串
  name: 'file'  // 文件字段名，默认为 'file'
})
```

#### 方式二：使用配置对象

```js
axios.request({
  method: 'upload',
  url: '/upload',
  data: {
    filePath: '/path/to/file.jpg',
    name: 'file',
    formData: {
      // 额外的表单数据
      userId: '123'
    }
  }
})
```

### 2. GET 请求参数混淆问题

当同时使用 `data` 和 `params` 发送 GET 请求时，两者会被合并。注意避免参数名冲突：

```js
// 不推荐：可能造成参数冲突
axios.get('/api', {
  params: { id: 1 },
  data: { id: 2 }  // 会覆盖 params 中的 id
})

// 推荐：使用 params 传递 GET 参数
axios.get('/api', {
  params: { id: 1 }
})
```

### 3. 请求头 Content-Type 设置无效

在上传文件时，手动设置的 `Content-Type` 会被自动移除，以确保正确设置 `multipart/form-data`：

```js
// Content-Type 会被忽略
axios.request({
  method: 'upload',
  url: '/upload',
  headers: {
    'Content-Type': 'application/json'  // 这个设置会被忽略
  },
  data: '/path/to/file.jpg'
})
```

### 4. 进度回调可能不生效

进度回调仅在非 Promise 化的请求任务中生效：

```js
// 正确使用进度回调
axios.request({
  method: 'upload',
  url: '/upload',
  data: '/path/to/file.jpg',
  onProgressUpdate: (progress) => {
    console.log('上传进度：', progress.progress)
  }
})
```

### 5. baseURL 与完整 URL 混用问题

当提供了 `baseURL` 配置时，如果请求的 URL 已经是完整的 URL（以 http:// 或 https:// 开头），则 `baseURL` 会被忽略：

```js
const instance = axios.create({
  baseURL: 'http://api.example.com'
})

// baseURL 会被忽略，实际请求 https://other.com/api
instance.get('https://other.com/api')

// 使用 baseURL，实际请求 http://api.example.com/users
instance.get('/users')
```

### 6. 响应类型设置问题

需要注意 `responseType` 的设置，它只支持 'text' 和 'arraybuffer' 两种类型：

```js
// 正确设置
axios.get('/api/data', {
  responseType: 'arraybuffer'
})

// 错误设置
axios.get('/api/data', {
  responseType: 'blob'  // 不支持的类型
})
```
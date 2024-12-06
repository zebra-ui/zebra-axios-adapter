# 基本用法

### 介绍

通过本章节你可以了解到 `ZebraAxios` 的一些基本用法。

### 发起请求

#### GET 请求
你可以通过以下两种方式发起 GET 请求：

```typescript
// 方式一：直接使用 api 实例
const handleGetUser = async () => {
  try {
    const user = await api.getUser('1')
    console.log('用户数据：', user)
  } catch (error) {
    console.error('获取用户失败：', error)
  }
}

// 方式二：使用独立的请求函数
const handleGetUser2 = async () => {
  try {
    const user = await getUser({
      id: 1
    })
    console.log('用户数据：', user)
  } catch (error) {
    console.error('获取用户失败：', error)
  }
}
```

#### POST 请求
同样支持两种方式发起 POST 请求：

```typescript
// 方式一：直接使用 api 实例
const handleCreateUser = async () => {
  try {
    const newUser = await api.createUser({
      name: 'Test User',
      email: 'test@example.com'
    })
    console.log('创建用户成功：', newUser)
  } catch (error) {
    console.error('创建用户失败：', error)
  }
}

// 方式二：使用独立的请求函数
const handleCreateUser2 = async () => {
  try {
    const newUser = await createUser({
      name: 'Test User',
      email: 'test@example.com'
    })
    console.log('创建用户成功：', newUser)
  } catch (error) {
    console.error('创建用户失败：', error)
  }
}
```

### 文件操作

#### 上传文件
ZebraAxios 提供了便捷的文件上传方法：

```typescript
// 方式一：使用 api 实例上传
const handleUpload = async () => {
  try {
    const chooseImageRes = await uni.chooseImage({
      count: 1
    })

    if (chooseImageRes.tempFilePaths?.[0]) {
      const result = await api.uploadFile(chooseImageRes.tempFilePaths[0], {
        userId: '123'
      })
      console.log('上传成功：', result)
    }
  } catch (error) {
    console.error('上传失败：', error)
  }
}

// 方式二：使用独立的上传函数
const handleUpload2 = async () => {
  try {
    const chooseImageRes = await uni.chooseImage({
      count: 1
    })

    if (chooseImageRes.tempFilePaths?.[0]) {
      const result = await uploadFile({
        filePath: chooseImageRes.tempFilePaths[0],
        name: 'file',
        formData: {
          userId: '123'
        }
      })
      console.log('上传成功：', result)
    }
  } catch (error) {
    console.error('上传失败：', error)
  }
}
```

#### 下载文件
同样支持两种方式进行文件下载：

```typescript
// 方式一：使用 api 实例下载
const handleDownload = async () => {
  try {
    const result = await api.downloadFile(
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    )
    console.log('下载成功：', result)
  } catch (error) {
    console.error('下载失败：', error)
  }
}

// 方式二：使用独立的下载函数
const handleDownload2 = async () => {
  try {
    const result = await downloadFile()
    console.log('下载成功：', result)
  } catch (error) {
    console.error('下载失败：', error)
  }
}
```

### 错误处理

所有的请求都支持标准的 try-catch 错误处理方式，你可以在 catch 块中处理请求失败的情况：

```typescript
try {
  const result = await api.someRequest()
  // 处理成功响应
} catch (error) {
  // 处理错误
  console.error('请求失败：', error)
}
```
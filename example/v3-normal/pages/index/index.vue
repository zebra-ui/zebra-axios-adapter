<template>
  <view class="root-container">
    <view class="container">
      <view class="title">axios-adapter</view>
      <button @click="handleGetUser">GET 请求测试</button>
      <button @click="handleGetUser2">GET 请求测试2</button>
      <button @click="handleCreateUser">POST 请求测试</button>
      <button @click="handleCreateUser2">POST 请求测试2</button>
      <button @click="handleUpload">上传文件测试</button>
      <button @click="handleUpload2">上传文件测试2</button>
      <button @click="handleDownload">下载文件测试</button>
      <button @click="handleDownload2">下载文件测试2</button>
    </view>
    <view class="container">
      <view class="title">原生 uniapp</view>
      <button @click="handleGetUserNative">原生GET 请求测试对比</button>
      <button @click="handleCreateUserNative">原生POST 请求测试对比</button>
      <button @click="handleUploadNative">原生上传文件测试对比</button>
      <button @click="handleDownloadNative">原生下载文件测试</button>
    </view>
  </view>
</template>

<script setup>
import { api, createUser, getUser, uploadFile, downloadFile } from '../../api'

// GET 请求测试
const handleGetUser = async () => {
  try {
    const user = await api.getUser('1')
    console.log('用户数据：', user)
  } catch (error) {
    console.error('获取用户失败：', error)
  }
}

// GET 请求测试2
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

// 原生 GET 请求测试
const handleGetUserNative = async () => {
  const user = await uni.request({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    method: 'GET'
  })
  console.log('用户数据：', user)
}

// POST 请求测试
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

// POST 请求测试2
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

// 原生 POST 请求测试
const handleCreateUserNative = async () => {
  try {
    const newUser = await uni.request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'POST',
      data: {
        name: 'Test User',
        email: 'test@example.com'
      }
    })
    console.log('创建用户成功：', newUser)
  } catch (error) {
    console.error('创建用户失败：', error)
  }
}

// 上传文件测试
const handleUpload = async () => {
  try {
    // 选择文件
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

const handleUpload2 = async () => {
  try {
    // 选择文件
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

// 原生上传文件测试
const handleUploadNative = async () => {
  try {
    // 选择文件
    const chooseImageRes = await uni.chooseImage({
      count: 1
    })

    if (chooseImageRes.tempFilePaths?.[0]) {
      const result = await uni.uploadFile({
        url: 'https://postman-echo.com/post',
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

// 下载文件测试
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

// 下载文件测试2
const handleDownload2 = async () => {
  try {
    const result = await downloadFile()
    console.log('下载成功：', result)
  } catch (error) {
    console.error('下载失败：', error)
  }
}

// 原生下载文件测试
const handleDownloadNative = async () => {
  try {
    const result = await uni.downloadFile({
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    })
    console.log('下载成功：', result)
  } catch (error) {
    console.error('下载失败：', error)
  }
}
</script>

<style>
.container {
  padding: 20px;
}

button {
  margin: 10px 0;
}

.title {
  font-size: 20px;
  font-weight: bold;
}
</style>

<div class="zebra-doc-card">
  <div class="zebra-doc-intro">
    <img class="zebra-doc-intro__logo" style="width: 480px; height: 180px;" src="https://assets-1256020106.file.myqcloud.com/zebra-axios/axios-to-uniapp.svg">
    <h2 style="margin: 0; font-size: 36px; line-height: 60px;">ZebraAxiosAdapter</h2>
    <p>一个用于 UniApp 的 Axios 适配器，支持小程序、H5 和 App 平台。</p>
  </div>
</div>

### 介绍

[zebra-axios-adapter](https://axios.zebraui.com/) 是一个用于 UniApp 的 [Axios](https://axios-http.com/) 适配器，支持小程序、H5 和 App 平台。

Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。由于小程序的请求机制不同，所以在小程序中并不能直接使用Axios。该适配器就是为了解决这个问题。

### 特性

- 💪 完整的 TypeScript 支持。
- 🔨 支持所有 UniApp 平台（小程序、H5、App）。
- 🎨 支持文件上传和下载。
- 🚀 支持上传/下载进度监听。
- 🍭 支持请求和响应拦截器。
- ⚡️ 支持请求超时配置。
- 🍭 支持 baseURL。
- ⚡️ 支持 validateStatus 自定义验证。
- ⚡️ 支持 responseType 配置。
- 📖 完善的错误处理。

### 安装

```bash
npm install axios-uniapp-adapter axios
```

### 基本使用

#### 创建实例

```typescript
import axios from 'axios'
import uniAppAdapter from '@zebra-ui/axios-adapter'

const instance = axios.create({
  adapter: uniAppAdapter,
  baseURL: 'https://api.example.com',
  timeout: 5000
})
```

#### 常规请求

```typescript
// GET 请求
instance
  .get('/users')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })

// POST 请求
instance.post('/users', {
  name: 'John',
  age: 30
})

// PUT 请求
instance.put('/users/1', {
  name: 'John Doe'
})

// DELETE 请求
instance.delete('/users/1')
```

### 示例项目

以下是 zebra-axios-adapter 官方提供的一些示例项目，你可以克隆该项目，并直接拷贝代码来使用。

示例项目中演示了如何使用请求拦截及通过api方式使用。

- [demo-normal](https://github.com/zebra-ui/zebra-axios-adapter/tree/master/example/v3-normal)：此示例项目使用 `HbuilderX` 创建应用，通过 `uni_modules` 引入zebra-axios-adapter。
- [demo-cli](https://github.com/zebra-ui/zebra-axios-adapter/tree/master/example/v3-cli)：此示例项目使用 `VSCode` 创建应用，通过 `pnpm` 引入zebra-axios-adapter。

### Zebra 生态

由 Zebra 官方维护的项目

- [zebra-ui](https://zebraui.com/) 基于uniapp，使用vue3 + ts + setup 的多端兼容组件库。
- [zebra-swiper](https://swiper.zebraui.com/) 基于uniapp，适配多端的高度自定义轮播组件
- [zebra-color](https://color.zebraui.com/) 全端兼容的轻量级颜色选择器。

### 交流群

QQ群：947159437 [点击加入](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=j0ofK9kA3Um4GXM3mdu0SNFUCOPTapGK&authKey=C%2Fr2jznrkjfCNen37FXpfR30fXpz2piJVCHkDTLHepAoq5OtZxtKXHJc%2BCZ77qFF&noverify=0&group_code=947159437)

<img alt="image" src="https://assets-1256020106.file.myqcloud.com/zebra-ui/source/zebra-qq-code.jpg" style="width:300px" />



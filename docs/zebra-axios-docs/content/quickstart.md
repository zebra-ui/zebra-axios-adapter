# 快速上手

### 介绍

通过本章节你可以了解到 `ZebraAxios` 的安装方法和基本使用方式。

## 安装

### 通过 npm 安装

:::tips
axios版本最高支持1.6.8，高于此版本在支付宝小程序中会出现异常。zebra-axios-adapter已经通过peerDependencies做了限制。

如果你已经在之前安装了axios，请先卸载后重新安装。
:::

在现有项目中使用 ZebraAxios 时，可以通过 `npm` 进行安装（同时安装axios）：

```bash
npm i @zebra-ui/axios-adapter axios
```

也可以通过 `pnpm` 进行安装：

```bash
# 通过 pnpm 安装
pnpm add @zebra-ui/axios-adapter axios
```

之后引入适配器

```ts
import { uniappAdapter, createRequest } from '@zebra-ui/axios-adapter'
```

使用适配器

```ts
// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  adapter: uniappAdapter
})
```

### 通过 uni_modules 安装

[zebra-axios](https://ext.dcloud.net.cn/plugin?id=17407)已经在uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=17407)发布。

如果使用的`IDE`为`HbuilderX`，则可以通过uniapp的[插件市场](https://ext.dcloud.net.cn/plugin?id=17407)进行sdk导入。

```ts
import { uniappAdapter, createRequest } from '@/uni_modules/zebra-axios-adapter'
```

### 快速编写一个拦截器

```ts
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
    console.log('响应数据：', response)
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
```
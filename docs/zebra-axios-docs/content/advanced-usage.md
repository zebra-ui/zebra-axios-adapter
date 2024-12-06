# 进阶用法

### 介绍

通过本章节你可以了解到 `ZebraAxios` 的一些进阶用法。

### 拦截器

`ZebraAxios` 支持请求和响应拦截器，可以在请求发送之前和收到响应之后进行处理：

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

### 请求和响应转换器

可以在请求发送之前和接收响应之后对数据进行转换

```js
// 创建 axios 实例
const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 10000,
	adapter: uniappAdapter,
	transformRequest: [function(data, headers) {
		// 对发送的 data 进行任意转换处理
		console.log("对发送的 data 进行任意转换处理", data)
		return data;
	}],

	// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
	transformResponse: [function(data) {
		// 对接收的 data 进行任意转换处理
		console.log("对接收的 data 进行任意转换处理", data)
		return data;
	}],
})
```

### 默认配置

可以指定将被用在各个请求的配置默认值

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```
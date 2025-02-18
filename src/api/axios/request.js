import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 只有在有实际请求时才打印日志
    if (config.method === "post" && config.data) {
      console.log("Sending request:", config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 只有在有实际响应时才打印日志
    if (response.config.method === "post" && response.data) {
      console.log("Response:", response.data);
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;

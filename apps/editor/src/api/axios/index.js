import request from "./request";

// GET 请求
export const get = (url, params) => {
  return request({
    method: "get",
    url,
    params,
  });
};

// POST 请求
export const post = (url, data) => {
  return request({
    method: "post",
    url,
    data,
  });
};

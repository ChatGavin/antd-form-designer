// https://github.com/ollama/ollama/blob/main/docs/api.md

import { post } from "../axios";

// 基础路径
const BASE_PATH = "/api/ollama";

// 聊天接口
export const chat = (message) => {
  return post(`${BASE_PATH}/api/chat`, {
    model: "deepseek-r1",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    options: {
      language: "zh-CN",
    },
  });
};

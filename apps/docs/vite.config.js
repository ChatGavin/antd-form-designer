import { defineConfig } from "vite";

// 根据环境变量判断是否为生产环境
const isProd = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  // 在生产环境和开发环境使用不同的 base
  base: isProd ? "https://designer.gavin.chat/docs/" : "/",
  server: {
    port: 9000,
    open: true,
  },
});

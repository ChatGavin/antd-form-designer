import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000, // 主应用端口
    open: true,
    cors: true, // 允许跨域
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

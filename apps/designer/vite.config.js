import { defineConfig } from "vite";
//
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
//
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // 如果是部署到 github pages，需要设置为 /<repo-name>/
  build: {
    outDir: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8010,
    open: true,
    proxy: {
      "/api/ollama": {
        // 更具体的路径前缀
        target: "http://localhost:11434",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ollama/, ""),
      },
      // 后续可以添加其他服务的代理
      // "/api/other-service": {
      //   target: "http://other-service",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api\/other-service/, ""),
      // },
    },
  },
});

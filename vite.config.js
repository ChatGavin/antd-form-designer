import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // 如果是部署到 github pages，需要设置为 /<repo-name>/
  server: {
    port: 8000,
    open: true,
  },
});

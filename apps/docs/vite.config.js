import { defineConfig } from "vite";

export default defineConfig({
  base: "/docs/",
  server: {
    port: 9000,
    open: true,
  },
});

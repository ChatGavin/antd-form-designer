import { defineConfig } from "vite";
//
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "/docs/",
  server: {
    port: 9000,
    open: true,
  },
});

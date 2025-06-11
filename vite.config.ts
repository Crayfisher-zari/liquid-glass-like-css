import { defineConfig } from "vite";
import "dotenv/config";

export default defineConfig({
  base: process.env?.BASE_PATH ?? "/",
  root: "./src/",
  build: {
    lib: {
      entry: ["src/main.css"],
      name: "style",
    },
    cssCodeSplit: true,
    copyPublicDir: false,
  },
});

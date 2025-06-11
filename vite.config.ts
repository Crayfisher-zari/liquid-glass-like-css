import { defineConfig } from "vite";
import "dotenv/config";

export default defineConfig({
  base: process.env?.BASE_PATH ?? "/",
  build: {
    lib: {
      entry: ["src/style.css"],
      name: "style",
    },
    cssCodeSplit: true,
  },
});

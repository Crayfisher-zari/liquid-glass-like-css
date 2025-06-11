import { defineConfig } from "vite";
import { globSync } from "glob";
import { relative, extname } from "path";
import { fileURLToPath } from "node:url";
import "dotenv/config";

const libBuidSettings = {
  lib: {
    entry: ["src/main.css"],
    name: "style",
  },
  cssCodeSplit: true,
  copyPublicDir: false,
};

const docBuildSettings = {
  outDir: "../docs",
  rollupOptions: {
    input: {
      ...Object.fromEntries(
        globSync("src/**/*.html").map((file) => [
          relative("src", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
    },
    output: {
      chunkFileNames: "assets/[name].js",
      assetFileNames: "assets/[name][extname]",
    },
  },
  target: "esnext",
  assetsInlineLimit: 0,
};

export default defineConfig(({ mode }) => ({
  base: process.env?.BASE_PATH ?? "/",
  root: "src",
  build: mode === "doc" ? docBuildSettings : libBuidSettings,
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify/browser",
      url: "url",
      zlib: "browserify-zlib",
      path: "path-browserify",
      fs: "browserify-fs",
    },
  },
  // define: {
  //   global: "window",
  //   "process.env": {},
  //   Buffer: ["buffer", "Buffer"],
  // },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
});

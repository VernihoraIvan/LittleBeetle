import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        wellKnown: ".well-known/apple-developer-merchantid-domain-association",
      },
    },
  },
});

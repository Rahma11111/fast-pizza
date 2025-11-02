import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";
import { copyFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  // ✅ ده مهم جدًا علشان GitHub Pages يعرف المسار
  base: "/fast-pizza/",

  plugins: [
    react(),
    eslint(),
    // ✅ Plugin بسيط لإنشاء 404.html تلقائي بعد build
    {
      name: "copy-404",
      closeBundle() {
        const indexPath = resolve("dist/index.html");
        const notFoundPath = resolve("dist/404.html");

        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath);
          console.log("✅ 404.html created successfully");
        } else {
          console.warn("⚠️ index.html not found in dist folder");
        }
      },
    },
  ],
});

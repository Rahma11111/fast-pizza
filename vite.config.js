import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fast-pizza/", // 👈 ده مهم جدًا — اسم الريبو بتاعك على GitHub
  plugins: [react(), eslint()],
});

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Remove BASE_PATH
const IMAGE_BASE_PATH = "";

export default defineConfig({
  base: "", // ✅ root path
  define: {
    __IMAGE_BASE_PATH__: JSON.stringify(IMAGE_BASE_PATH),
  },
  plugins: [react(), tailwindcss()],
});

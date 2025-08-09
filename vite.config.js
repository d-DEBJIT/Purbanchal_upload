// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const BASE_PATH = "/purbanchal";
const IMAGE_BASE_PATH = `${BASE_PATH}`;

export default defineConfig({
  base: BASE_PATH,
  define: {
    __IMAGE_BASE_PATH__: JSON.stringify(IMAGE_BASE_PATH), // 👈 Make it globally accessible
  },
  plugins: [react(), tailwindcss()],
});

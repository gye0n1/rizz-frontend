import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rizz-frontend/", // GitHub Pages의 repo 이름을 입력
});

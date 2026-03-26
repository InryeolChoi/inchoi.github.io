import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/inchoi.github.io/",
  plugins: [react()],
});

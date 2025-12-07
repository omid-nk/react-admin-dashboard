import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          recharts: ["recharts"],
          icons: ["react-icons"],
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  base: "/react-admin-dashboard/",
});

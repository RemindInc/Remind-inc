import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        splashscreen: "splashscreen.html", // Add this line to use splashscreen.html as the entry point
      },
    },
  },
  plugins: [react()],
});

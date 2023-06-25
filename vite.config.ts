import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = env.VITE_DEV_PORT;

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: parseInt(PORT),
    },
  };
});


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env instead of just those with `VITE_`.
  // Using '.' as a more robust alternative to process.cwd() to resolve TypeScript environment type conflicts.
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // This shim allows 'process.env.API_KEY' to work in the browser
      // by replacing it with the actual value during the build process.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
    }
  };
});

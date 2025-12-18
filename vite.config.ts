
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode`. In Vercel, these are injected into the build environment.
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Stringify ensures the value is treated as a string literal in the bundle.
      // We add a fallback to empty string to avoid 'undefined' reference errors.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    }
  };
});

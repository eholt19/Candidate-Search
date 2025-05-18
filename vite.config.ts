import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  base: './',
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['candidate-search-49lz.onrender.com']
  }
});

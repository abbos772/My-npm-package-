import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Bu package’ni to‘g‘ridan-to‘g‘ri o‘qish uchun
    preserveSymlinks: true,
    alias: {
      '@abbos04/my-npm-package': path.resolve(__dirname, '../My-npm-package/dist')
    }
  },
  optimizeDeps: {
    exclude: ['@abbos04/my-npm-package']
  },
  server: {
    fs: {
      // linked papkani o‘qishga ruxsat beradi
      allow: ['..']
    },
    watch: {
      usePolling: true,
      interval: 100 // tezroq reload
    }
  }
});

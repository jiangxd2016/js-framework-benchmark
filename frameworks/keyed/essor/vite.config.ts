import path from 'node:path';
import { defineConfig } from 'vite';
import essor from 'unplugin-essor/vite';

export default defineConfig({
  base:'/frameworks/keyed/essor/dist/',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, '/src')}/`,
    },
  },
  plugins: [essor()],
});

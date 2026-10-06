import { defineConfig } from 'vite'; // Change this import
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Vite Build Settings
  build: {
    outDir: 'dist',
  },
  // Vitest settings (will be ignored during production build)
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './src/tests/setup.js'),
  },
});
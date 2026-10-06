import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // Use path.resolve for absolute cross-platform reliability
    setupFiles: path.resolve(__dirname, './src/tests/setup.js'),
  },
});
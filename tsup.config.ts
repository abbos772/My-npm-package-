import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.css': 'local-css',
    };
  },
});
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    resolve: true, 
  },
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom'],
  injectStyle: true, 
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.css': 'local-css',
    }
  },
})

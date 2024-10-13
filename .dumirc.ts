import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-components/',
  publicPath: '/react-components/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'yxhooks',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: './src/components' },
      { type: 'hook', dir: './src/hooks' },
      { type: 'util', dir: './src/utils' },
    ],
  },
});
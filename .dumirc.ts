import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/@zzxiexin/react-components/',
  publicPath: '/@zzxiexin/react-components/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@zzxiexin/react-components',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: './src/components' },
      { type: 'hook', dir: './src/hooks' },
      { type: 'util', dir: './src/utils' },
    ],
  },
});
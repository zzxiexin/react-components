import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/@zzxiexin/ui/',
  publicPath: '/@zzxiexin/ui/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@zzxiexin/ui',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: './src/components' },
      { type: 'hook', dir: './src/hooks' },
      { type: 'util', dir: './src/utils' },
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 320px !important;
    }
    #component-demo {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }`,
  ],
});
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/yxhooks/',
  publicPath: '/yxhooks/',
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
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/yxx-component/',
  publicPath: '/yxx-component/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'yxx-component',
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
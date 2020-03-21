import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

const { argv } = process;
const isDevelopment = argv && argv.includes('--dev');

// https://stenciljs.com/docs/config
export const config: Config = {
  devServer: {
    openBrowser: false
  },
  globalStyle: 'src/styles/global.scss',
  globalScript: 'src/initialize.ts',
  namespace: 'mapa',
  outputTargets: [
    {
      baseUrl: 'https://frontend.mapa.local/',
      copy: [
        {
          src: 'config.json'
        },
        {
          src: '../node_modules/typeface-baloo-bhai/files',
          dest: 'assets/fonts/baloo-bhai'
        }
      ],
      // comment the following line to disable service workers in production
      serviceWorker: null,
      type: 'www'
    }
  ],
  plugins: [
    sass({
      includePaths: ['./node_modules'],
      importer: url => ({ file: url.replace(/^~/, './node_modules/') })
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};

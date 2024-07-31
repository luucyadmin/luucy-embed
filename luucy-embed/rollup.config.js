import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: [
      {
        name: 'luucy-embed',
        file: pkg.browser,
        format: 'umd',
        plugins: [resolve(), commonjs()]
      },
      {
        file: pkg.main,
        format: 'cjs',
        external: ['ms']
      },
      {
        file: pkg.module,
        format: 'es',
        external: ['ms']
      }
    ],
    plugins: [terser()]
  },
  {
    input: 'src/luucy-embed.d.ts',
    output: {
      file: 'dist/luucy-embed.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];

import { RollupOptions } from 'rollup'
import del from 'rollup-plugin-delete'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'

const config: RollupOptions = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    del({
      targets: 'dist/*',
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    commonjs(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
}

export default config

import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/foreachain.cjs.js',
            format: 'cjs'
        },
        {
            file: './dist/foreachain.esm.js',
            format: 'esm'
        },
        {
            file: './dist/foreachain.min.js',
            format: 'iife',
            name: 'foreachain'
        }
    ],
    plugins: [
        terser({ output: { ecma: 6 } })
    ]
}
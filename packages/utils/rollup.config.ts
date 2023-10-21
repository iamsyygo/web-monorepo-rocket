import * as rollup from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import strip from '@rollup/plugin-strip';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
// import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';
// import vue from 'rollup-plugin-vue';

// https://cn.rollupjs.org
export default rollup.defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'es/index.js',
                format: 'es',
                sourcemap: true,
            },
            {
                file: 'lib/index.js',
                format: 'cjs',
                sourcemap: true,
            },
        ],
        // preserveModules: true,
        plugins: [
            strip(),
            typescript(),
            json(),
            // vue({
            //     target: 'browser',
            //     include: /\.vue$/,
            //     exclude: /node_modules/,
            // }),
            // postcss({
            //     // extract: true,
            //     namedExports(id) {
            //         console.log(id);
            //         return id;
            //     },
            // }),
            nodeResolve(),
            commonjs({ include: 'node_modules/**' }),
        ],
        external: ['vue'],
    },
    {
        input: 'es/types/index.d.ts',
        output: [{ file: 'index.d.ts', format: 'es' }],
        plugins: [dts()],
    },
]);

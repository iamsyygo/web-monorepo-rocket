import * as rollup from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import strip from '@rollup/plugin-strip';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from 'rollup-plugin-dts';
// import pjs from 'package.json';

// https://cn.rollupjs.org
export default rollup.defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'es/index.js',
                banner: '!/usr/bin/env node',
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
        plugins: [commonjs(), strip(), typescript(), json(), nodeResolve()],
        external: [],
    },
    // {
    //     input: 'es/types/index.d.ts',
    //     output: [{ file: 'index.d.ts', format: 'es' }],
    //     plugins: [dts()],
    // },
]);

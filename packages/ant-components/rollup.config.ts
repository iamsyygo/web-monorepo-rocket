import * as rollup from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// import typescript from 'rollup-plugin-typescript2';
import strip from '@rollup/plugin-strip';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
// import { dts } from 'rollup-plugin-dts';
// import vue from 'rollup-plugin-vue';

import vue from '@vitejs/plugin-vue';
import vjsx from '@vitejs/plugin-vue-jsx';
import vueMacros from 'unplugin-vue-macros/rollup';

// import svg from 'rollup-plugin-svg';
// import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import { resolve } from 'path';

// https://cn.rollupjs.org
export default rollup.defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                dir: 'es',
                format: 'es',
                sourcemap: true,
                preserveModules: false,
                // preserveModulesRoot: resolve(__dirname, 'src'),
            },
            {
                file: 'lib/index.js',
                format: 'cjs',
                sourcemap: true,
            },
        ],
        // preserveModules: true,
        plugins: [
            // image({ dom: true, }),
            // svg({
            //     base64: false,
            // }),
            // typescript({
            //     check: false,
            //     // exclude: 'node_modules/**',
            //     // include: ['src/*.ts+(|x)', '*.vue', '**/*.vue'],
            //     // tsconfig: resolve(__dirname, 'tsconfig.json'),
            // }),
            // url({
            //     fileName: 'assets/[name]-[hash][extname]',
            //     limit: 80,
            //     include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp'],
            //     exclude: 'node_modules/**',
            //     destDir: 'es',
            //     sourceDir: 'src',
            // }),
            strip(),
            json(),
            vueMacros({
                setupComponent: false,
                setupSFC: false,
                plugins: {
                    vue: vue({
                        isProduction: true,
                        include: [/\.vue$/],
                        exclude: ['node_modules/**'],
                        script: {
                            propsDestructure: true,
                            defineModel: true,
                        },
                    }),
                    vueJsx: vjsx(),
                },
            }),
            // typescript(),
            postcss({
                // extract: true,
                namedExports(id) {
                    console.log(id);
                    return id;
                },
            }),
            // svg({ base64: false }),
            nodeResolve({
                mainFields: ['module', 'main', 'jsnext:main', 'browser'],
                browser: true,
            }),
            commonjs({ include: 'node_modules/**' }),
        ],
        // external: ['vue', 'ant-design-vue'],
    },
    // {
    //     input: 'es/index.d.ts',
    //     output: [{ file: 'index.d.ts', format: 'es' }],
    //     plugins: [dts()],
    // },
]);

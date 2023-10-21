import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import glob from 'fast-glob';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import symbols from './src/plugins/get-symbols';

const pakDir = resolve(__dirname, 'src');

export default defineConfig({
    build: {
        target: 'modules',
        minify: false,
        rollupOptions: {
            plugins: [],
            external: [],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    dir: 'es',
                    // preserveModulesRoot: 'src',
                    // assetFileNames: '[ext]/[name][extname]',
                    // chunkFileNames: '[name].js',
                    // manualChunks(id) {
                    //     if (id.startsWith(pakDir)) {
                    //         const chunkName = id.replace(pakDir + '/', '').split('/')[0];
                    //         return chunkName + '/' + chunkName;
                    //     } else {
                    //         return 'vendor';
                    //     }
                    // },
                },
                // {
                //     format: 'cjs',
                //     entryFileNames: '[name].js',
                //     //让打包目录和我们目录对应
                //     preserveModules: true,
                //     //配置打包根目录
                //     dir: 'lib',
                //     preserveModulesRoot: 'src',
                // },
            ],
        },
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [
        createSvgIconsPlugin({
            iconDirs: [resolve(__dirname, 'src/assets')],
            svgoOptions: true,
            symbolId: 'aoe-[name]',
            // customDomId: 'aoe-[name]',
        }),
        symbols(),
        // dts({}),
    ],
});

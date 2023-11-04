import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import { resolve, normalize } from 'path';

const pakDir = normalize(resolve(__dirname, 'src'));
export default defineConfig({
    build: {
        // watch: { include: 'src/**' },
        target: 'modules',
        outDir: 'es',
        minify: false,
        cssCodeSplit: true,
        chunkSizeWarningLimit: 8 * 1024,
        rollupOptions: {
            plugins: [],
            external: ['vue', /^ant-design-vue\/es\/.*/, 'vue-router'],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    dir: 'es',
                    preserveModulesRoot: 'src',
                    assetFileNames: '[ext]/[name][extname]',
                    chunkFileNames: '[name].js',
                    manualChunks(id) {
                        id = normalize(id);
                        if (id.startsWith(pakDir)) {
                            const chunkName = id.replace(pakDir, '').split(/[\\/]/)[1];
                            return chunkName + '/' + chunkName;
                        } else {
                            return 'vendor';
                        }

                        // if (id.includes('node_modules')) {
                        //     return 'vendor';
                        // }
                        // 其他包根据目录名称
                    },
                    // sourcemap: true,
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
        vue({
            exclude: ['node_modules/**'],
            include: [/\.vue$/],
            script: {
                propsDestructure: true,
                defineModel: true,
            },
        }),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        dts({}),
    ],
});

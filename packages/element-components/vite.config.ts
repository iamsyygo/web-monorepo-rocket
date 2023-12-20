import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import { resolve, normalize } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import visualizer from 'rollup-plugin-visualizer';

const pakDir = normalize(resolve(__dirname, 'src'));
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        // watch: { include: 'src/**' },
        target: 'modules',
        outDir: 'es',
        minify: false,
        cssCodeSplit: true,
        chunkSizeWarningLimit: 8 * 1024,
        rollupOptions: {
            cache: true,
            plugins: [
                // @ts-expect-error
                visualizer(),
            ],
            external: [
                'vue',
                /^@aoe\/element-components[\/\w]*$/,
                /^ant-design-vue\/es\/.*/,
                /^element-plus[\/\w]*$/,
                /^@formkit\/auto\-animate.*/,
                'vue-router',
                'draggabilly',
                'animate.css',
                '@element-plus/icons-vue',
                'vuedraggable/src/vuedraggable',
            ],
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
                    },
                    // sourcemap: true,
                    // globals: {
                    //     jquery: '$',
                    // },

                    // sourcemap：是的，                    // exports:'default'
                    // default，等于最终导出等于 export default xxx，这里适用于单个文件入口
                    // named，等于 export default {xxx1, xxx2}，适用于多个入口文件
                    // none，没有 export，适用于打包 web 应用，不需要对外抛出对象

                    // externalLiveBindings: true
                    //  是否给外部依赖生成动态绑定代码，简单来说就是是否需要将外部依赖的 npm 包通过转义来引入
                },

                // cjs
                // {
                //     format: 'cjs',
                //     entryFileNames: '[name].js',
                //     //让打包目录和我们目录对应
                //     preserveModules: true,
                //     //配置打包根目录
                //     dir: 'lib',
                //     preserveModulesRoot: 'src',
                // },

                // 单独打包 ts 类型文件的
                // {},

                // umd
                // {
                //     format: 'umd',
                //     globals(name) {},
                // },
            ],
        },
        lib: {
            entry: 'src/index.ts',
            formats: ['es', 'cjs'],
        },
    },
    plugins: [
        vueJsx(),
        vue({
            exclude: ['node_modules/**'],
            include: [/\.vue$/],
            script: {
                propsDestructure: true,
                defineModel: true,
                // 全局类型声明，用于 vue3 新的类型推断(props等)
                // globalTypeFiles: ['src/shims-vue.d.ts'],
            },
        }),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        dts({}),
    ],
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import Unocss from 'unocss/vite';
// import glob from 'fast-glob';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import { resolve } from 'path';

// const dirs = glob.sync('**/*.{js,ts,vue}', {
//     cwd: 'src',
//     absolute: true,
//     onlyFiles: true,
//     ignore: ['**/*.d.ts', '**/*.spec.ts', '**/*.spec.js'],
// });
// console.log(dirs);

const pakDir = resolve(__dirname, 'src');
export default defineConfig({
    build: {
        target: 'modules',
        outDir: 'es',
        minify: false,
        // assetsDir: 'assets',
        // 指定 build.lib，build.assetsInlineLimit 将被忽略
        assetsInlineLimit: 4 * 1024,
        // css分离
        cssCodeSplit: true,
        chunkSizeWarningLimit: 8 * 1024,

        rollupOptions: {
            plugins: [],
            external: ['vue', /^ant-design-vue\/es\/.*/],
            input: ['src/index.ts'],
            // input: dirs,
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    // preserveModules: true,

                    //配置打包根目录
                    dir: 'es',
                    preserveModulesRoot: 'src',
                    // assetFileNames: 'assets/[ext]/[name].[hash:8].[extname]',
                    assetFileNames: '[ext]/[name][extname]',
                    // assetFileNames({ name }) {
                    //     console.log(...arguments);

                    //     // css
                    //     if (name && name?.endsWith('.css')) {
                    //         console.log(name?.split('/'));

                    //         return `css/${name?.split('/')[0]}[extname]`;
                    //     }
                    //     return `assets/${name}[extname]`;
                    // },
                    chunkFileNames: '[name].js',

                    // assetFileNames(chunkInfo) {
                    //     console.log(...arguments);

                    //     const { name, ext } = chunkInfo;
                    //     return `assets/${ext}/${name}.[hash:8].${ext}`;
                    // },

                    // chunkFileNames: 'assets/[name].[hash:8].js',
                    manualChunks(id) {
                        // console.log(id);
                        console.log(id);
                        if (id.startsWith(pakDir)) {
                            // console.log(id);
                            const chunkName = id.replace(pakDir + '/', '').split('/')[0];
                            // return chunkName;
                            // return 'components/' + chunkName;
                            return chunkName + '/' + chunkName;
                        } else {
                            return 'vendor';
                        }

                        // console.log(...arguments);
                        // if (id.includes('node_modules')) {
                        //     return 'vendor';
                        // }
                        // // 其他包根据目录名称
                    },
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
            // style: { trim: true, },
        }),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        dts({
            //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        }),
        // //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        // dts({
        //     outputDir: 'lib',
        //     tsConfigFilePath: '../../tsconfig.json',
        // }),
    ],
});

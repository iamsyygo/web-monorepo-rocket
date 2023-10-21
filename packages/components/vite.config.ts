import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// 引入Unocss
// import Unocss from 'unocss/vite';
// import { presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
    build: {
        target: 'modules',
        outDir: 'es',
        minify: false,
        // assetsInlineLimit: 60000,
        //css分离
        //cssCodeSplit: true,

        rollupOptions: {
            plugins: [],
            external: ['vue', /^ant-design-vue\/es\/.*/],
            input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,

                    //配置打包根目录
                    dir: 'es',
                    preserveModulesRoot: 'src',
                    assetFileNames: 'assets/[ext]/[name].[hash:8].[extname]',
                    // assetFileNames(chunkInfo) {
                    //     console.log(...arguments);

                    //     const { name, ext } = chunkInfo;
                    //     return `assets/${ext}/${name}.[hash:8].${ext}`;
                    // },

                    // chunkFileNames: 'assets/[name].[hash:8].js',
                    // manualChunks(id) {
                    //     console.log(...arguments);
                    //     // if (id.includes('node_modules')) {
                    //     //     return 'vendor';
                    //     // }
                    //     // // 其他包根据目录名称
                    //     if (id.includes('src')) {
                    //         return 'src';
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
        vue({
            exclude: ['node_modules/**'],
            include: [/\.vue$/],
            script: {
                propsDestructure: true,
                defineModel: true,
            },
            // style: { trim: true, },
        }),
        // Unocss({
        //     // 使用Unocss
        //     presets: [presetUno(), presetAttributify(), presetIcons()],
        // }),
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

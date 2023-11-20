import { Plugin } from 'vite';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

interface ISvgTransformPluginOptions {
    dir: string;
    symbolSuffix: string;
    ignoreFiles?: string[];
}

// 将某个目录下的所有.svg文件转换成 <syboml> 标签包裹 svg 内容插入到 html 中
function SvgTransformPlugin(_option: ISvgTransformPluginOptions): Plugin {
    return {
        name: 'vite-plugin-svg-transform',
        // apply: 'serve',
        // 读取svg文件，生成一个 .js 文件，在html中引入这个js文件
        buildStart(option) {
            // @ts-expect-error
            const { dir, symbolSuffix, ignoreFiles } = option;
            const files = readdirSync(dir);
            const svgFiles = files.filter((file) => file.endsWith('.svg'));
            const svgContent = svgFiles
                .filter((file) => !ignoreFiles?.includes(file))
                .map((file) => {
                    const svg = readFileSync(resolve(dir, file), 'utf-8');
                    const name = file.replace('.svg', '');
                    return `export const ${name}${symbolSuffix} = '${svg}';`;
                })
                .join('\n');
            this.emitFile({
                type: 'asset',
                fileName: 'svg.js',
                source: svgContent,
            });
        },
    };
}

export default SvgTransformPlugin;
export { SvgTransformPlugin };

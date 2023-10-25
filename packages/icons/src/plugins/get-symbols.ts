import { readFileSync } from 'fs';
import type { Plugin } from 'vite';

const symbolReg = /<symbol\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;
const symbolIdReg = /(?<=<symbol\s+id=")([^"]+)(?=")/g;
export interface Options {
    // 扩展的 iconfont.js 文件路径
    extends?: string[];
}

export default function (options: Options = {}): Plugin {
    // const iconfontModulRegisterId = 'virtual:extended-iconfont-register';
    const iconfontSymbolsModulId = 'virtual:extended-iconfont-icons-names';
    const iconSymbolTypesModulId = 'virtual:inject-symbols-types';
    const prefix = '\0';

    const hasExtends = options.extends && options.extends.length > 0;

    return {
        name: 'vite-plugin-get-symbols',
        apply: 'build', // 只在 build 时生效
        resolveId(id) {
            // if (id === iconfontModulRegisterId) {
            //     return prefix + iconfontModulRegisterId;
            // }
            if (id === iconfontSymbolsModulId) {
                return prefix + iconfontSymbolsModulId;
            }
            if (id === iconSymbolTypesModulId) {
                return prefix + iconSymbolTypesModulId;
            }
        },
        load(id) {
            // if (id === prefix + iconfontModulRegisterId) {
            //     debugger;
            //     return hasExtends ? '' : '';
            // }
            if (id === prefix + iconfontSymbolsModulId) {
                const text = getIconFontFileSymbolContent(options.extends!).symbolIds;
                return hasExtends ? `export default ["${text?.join(",'")}"]` : `export default []`;
            }
            if (id === prefix + iconSymbolTypesModulId) {
                return `export const _ = "from virtual module"`;
            }
        },
        transform(code, id) {
            if (id === 'virtual:svg-icons-register' && hasExtends) {
                const { content } = getIconFontFileSymbolContent(options.extends!);
                const injectCode = `\nsymbolDom.innerHTML += \`${content}\`;\n`;
                code = code.replace(/body\.insertBefore/, injectCode + 'body.insertBefore');
                return code;
            }
            return code;
        },
        buildStart(options) {},
    };
}

function getIconFontFileSymbolContent(files: string[]) {
    const content = files
        .map((file) => {
            // 读取文件内容
            const code = readFileSync(file, 'utf-8');
            const reslut = code.match(symbolReg);
            return reslut?.join('') || '';
        })
        .join('');
    const symbolIds: string[] | null = content.match(symbolIdReg);
    return { content, symbolIds };
}

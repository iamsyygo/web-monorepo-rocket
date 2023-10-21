import type { Plugin } from 'vite';
export interface Options {}

export default function (options: Options = {}): Plugin {
    return {
        name: 'vite-plugin-get-symbols',
        transform(code, id) {
            console.log(code, id);
            debugger;
        },
        // 打包结束后执行
        buildStart(options) {},
    };
}

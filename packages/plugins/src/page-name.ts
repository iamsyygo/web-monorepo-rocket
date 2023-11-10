import { Plugin } from 'vite';
// import { resolve, dirname } from 'path';
// import { fileURLToPath } from 'url';
import fse from 'fs-extra';

/* `接口 PageNameOption` 定义了一个对象的结构，该对象可以作为选项传递给 `vitePluginPageName` 函数。它指定两个可选属性：“include”和“cb”。
“include”属性是一个表示视图地址的字符串，“cb”属性是一个回调函数，它接受名称参数并返回一个字符串。 */
export interface PageNameOption {
    // view 地址
    include?: string;
    cb?: (name: string) => string;
}

// 修改组件 name
export default function vitePluginPageName(option: PageNameOption = {}): Plugin {
    // 不能使用 __dirname
    const { include = '' } = option;
    // const __dirname = dirname(fileURLToPath(import.meta.url))

    // const root = process.cwd();

    const config = {
        root: include,
    };

    return {
        name: 'vite-plugin-page-name',
        // apply: 'build',
        transform(code, id) {
            // 排除 node_modules || 非 vue 文件
            if (!id.startsWith(config.root) || !id.endsWith('index.vue')) {
                return { code };
            }

            // const path = id.split('/').slice(0, -1).join('/')
            const path = id.replace(/\/index\.vue$/, '');
            // path 路径下是否存在 route.L[0-9].ts文件
            const hasRouteFile = fse.readdirSync(path).some((file) => /^route\.L[0-9]\.ts$/.test(file));
            if (hasRouteFile) {
                const name = path.split('/').slice(-1)[0];
                // 修改组件 name
                code = code.replace(/__name:\s*["'](\w+)["']/, `__name: '${name}'`);
            }
            return code;
        },
        configResolved(cfg) {
            config.root = config.root ? config.root : cfg.root + '/src/view';
        },
        // configureServer(server) {
        //   server.watcher.add(include)
        // },
    };
}

import { Plugin } from 'vite';
import { resolve } from 'path';
import fse from 'fs-extra';

interface Option {
    // view 地址
    include?: string;
    cb?: (name: string) => string;
}

// 修改组件 name
export default function vitePluginPageName(option: Option = {}): Plugin {
    const { include = resolve(__dirname, 'src/view') } = option;

    return {
        name: 'vite-plugin-page-name',
        // apply: 'build',
        transform(code, id) {
            // 排除 node_modules || 非 vue 文件
            if (!id.startsWith(include) || !id.endsWith('index.vue')) {
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
        // configureServer(server) {
        //   server.watcher.add(include)
        // },
    };
}

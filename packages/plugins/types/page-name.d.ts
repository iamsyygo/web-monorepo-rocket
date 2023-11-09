import { Plugin } from 'vite';
interface Option {
    include?: string;
    cb?: (name: string) => string;
}
export default function vitePluginPageName(option?: Option): Plugin;
export {};

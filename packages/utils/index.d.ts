import { Plugin, AppContext, Directive } from 'vue';

type SFCWithInstall<T> = T & Plugin;
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};

declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
declare const withInstallDirective: <T extends Directive>(directive: T, name: string) => SFCWithInstall<T>;
declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;

/**
 * mix 颜色
 * @param {string} color1
 * @param {string} color2
 * @param {number} weight
 * @returns {string} hex
 */
declare function mixColor(color1: string, color2: string, weight?: number): string;
/**
 * 生成不同梯度的颜色
 * @param {string} color1
 * @param {string} color2
 * @param {number[]}  weights
 * @param {string} [prefix]
 * @returns {object} {[key: string]: string}
 */
declare function gradientMixColors(color1: string, color2: string, weights: number[], prefix?: string): {};
/**
 * element plus 主题色
 * @param {string} color
 * @returns {object} {[key: string]: string}
 */
declare function handleElementTheme(color: string): {
    '--el-color-primary': string;
    '--el-color-primary-dark-2': string;
};

export { type SFCInstallWithContext, type SFCWithInstall, gradientMixColors, handleElementTheme, mixColor, withInstall, withInstallDirective, withInstallFunction, withNoopInstall };

/**
 * mix 颜色
 * @param {string} color1
 * @param {string} color2
 * @param {number} weight
 * @returns {string} hex
 */
export declare function mixColor(color1: string, color2: string, weight?: number): string;
/**
 * 生成不同梯度的颜色
 * @param {string} color1
 * @param {string} color2
 * @param {number[]}  weights
 * @param {string} [prefix]
 * @returns {object} {[key: string]: string}
 */
export declare function gradientMixColors(color1: string, color2: string, weights: number[], prefix?: string): {};
/**
 * element plus 主题色
 * @param {string} color
 * @returns {object} {[key: string]: string}
 */
export declare function handleElementTheme(color: string): {
    '--el-color-primary': string;
    '--el-color-primary-dark-2': string;
};

// /**
//  * 转换颜色格式 #fff => rgb(255, 255, 255)
//  * @param {string} hex
//  * @returns {[number, number, number]} [r, g, b]
//  */
// export function hexToRgb(hex: string): [number, number, number] {
//     let hexValue = hex.replace('#', '');
//     if (hexValue.length === 3) {
//         hexValue = hexValue
//             .split('')
//             .map((item) => item + item)
//             .join('');
//     }

//     // 16进制转10进制
//     const r = parseInt(hexValue.substring(0, 2), 16);
//     const g = parseInt(hexValue.substring(2, 4), 16);
//     const b = parseInt(hexValue.substring(4, 6), 16);
//     return [Math.round(r), Math.round(g), Math.round(b)];
// }

// /**
//  * 转换颜色格式 rgb(255, 255, 255) => #fff
//  * @param {number} r
//  * @param {number} g
//  * @param {number} b
//  * @returns {string} hex
//  */
// export function rgbToHex(r: number, g: number, b: number): string {
//     // 10进制转16进制
//     // padStart 是一个字符串方法，用于头部补0
//     const hexR = r.toString(16).padStart(2, '0');
//     const hexG = g.toString(16).padStart(2, '0');
//     const hexB = b.toString(16).padStart(2, '0');
//     return `#${hexR}${hexG}${hexB}`;
// }

// /**
//  * sass mix 函数
//  * @param {string} color1
//  * @param {string} color2
//  * @param {number} weight
//  * @returns {hex|rgb} [format]
//  * @returns {string} [color]
//  */
// export function mix(color1: string, color2: string, weight = 0.5): string {
//     if (weight > 1 || weight < 0) {
//         throw new Error('weight must be between 0 and 1');
//     }
//     const [r1, g1, b1] = hexToRgb(color1);
//     const [r2, g2, b2] = hexToRgb(color2);

//     const red = (1 - weight) * r1 + weight * r2;
//     const green = (1 - weight) * g1 + weight * g2;
//     const blue = (1 - weight) * b1 + weight * b2;

//     const hex = rgbToHex(red, green, blue);
//     return hex;
// }

import { default as color } from 'color';

/**
 * mix 颜色
 * @param {string} color1
 * @param {string} color2
 * @param {number} weight
 * @returns {string} hex
 */
export function mixColor(color1: string, color2: string, weight = 0.5): string {
    if (weight > 1 || weight < 0) {
        throw new Error('weight must be between 0 and 1');
    }
    return color(color1).mix(color(color2), weight).hex();
}

/**
 * 生成不同梯度的颜色
 * @param {string} color1
 * @param {string} color2
 * @param {number[]}  weights
 * @param {string} [prefix]
 * @returns {object} {[key: string]: string}
 */
export function gradientMixColors(color1: string, color2: string, weights: number[], prefix = '--color-') {
    return weights.reduce((acc, item: number) => {
        // 解决小数点精度问题，相减可能会出现 0.30000000000000004
        const weight = (10 - item * 10) / 10;
        const hex = mixColor(color1, color2, weight);

        return {
            ...acc,
            [`${prefix}${item * 10}`]: hex,
        };
    }, {});
}

/**
 * element plus 主题色
 * @param {string} color
 * @returns {object} {[key: string]: string}
 */
export function handleElementTheme(color: string) {
    const weights = [0.3, 0.5, 0.7, 0.8, 0.9];
    const colors = gradientMixColors('#ffffff', color, weights, '--el-color-primary-light-');
    return {
        ...colors,
        '--el-color-primary': color,
        '--el-color-primary-dark-2': mixColor('#000000', color, 0.8),
    };
}

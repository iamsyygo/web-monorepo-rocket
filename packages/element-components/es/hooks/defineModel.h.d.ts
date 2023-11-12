import { WritableComputedRef } from 'vue';
/**
 * vue3.3 新增的 defineModel 编译宏不支持 setup 函数(!语法糖), 所以这里实现一个
 * @param props 组件的 props
 * @param fieldName props 中的字段名
 * @param emits 组件的 emits 函数
 * @returns
 * @ponder 组件销毁 使用 watchEffect or watch 在 hooks 中需要手动销毁
 */
export declare function useDefineModel<T extends Record<keyof any, any>, P extends keyof T>(props: T, fieldName: P, emits: any, defaultValue?: any): WritableComputedRef<T[P]>;

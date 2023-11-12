import { computed, WritableComputedRef } from 'vue';

// keyof any > string | number | symbol

/**
 * vue3.3 新增的 defineModel 编译宏不支持 setup 函数(!语法糖), 所以这里实现一个
 * @param props 组件的 props
 * @param fieldName props 中的字段名
 * @param emits 组件的 emits 函数
 * @returns
 * @ponder 组件销毁 使用 watchEffect or watch 在 hooks 中需要手动销毁
 */
export function useDefineModel<T extends Record<keyof any, any>, P extends keyof T>(
    props: T,
    fieldName: P,
    emits,
    defaultValue?: any,
): WritableComputedRef<T[P]> {
    return computed({
        get() {
            // 使用 Proxy 再代理 props[fieldName] 一层, 负责修改 props[fieldName] 的字段是无法触发 computed 的 set 函数，得修改 props[fieldName] 的引用才行

            // 默认值处理
            if (props[fieldName] === void 0) {
                // emits('update:' + (fieldName as string), defaultValue);
                return defaultValue;
            }
            // 如果 props[fieldName] 不是对象，直接返回
            if (typeof props[fieldName] !== 'object') return props[fieldName];

            const proxy = new Proxy(props[fieldName], {
                get(target, key, receiver) {
                    // 使用 Reflect.get 代理 props[fieldName] 的 get 函数，减少手动操作带来的错误
                    return Reflect.get(target, key, receiver);
                },
                set(target, key, newValue, _receiver) {
                    emits('update:' + (fieldName as string), {
                        ...target,
                        [key]: newValue,
                    });
                    return true;
                },
            });

            return proxy;
        },
        set(val) {
            emits('update:' + (fieldName as string), val);
        },
    });
}

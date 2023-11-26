<template>
    <render></render>
</template>

<script setup lang="tsx">
import { VNode, computed, onMounted, useAttrs, watch } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate/vue';
// import { useVModel } from '@vueuse/core';
import FormItemContent from './items';
import { FormItemTypeProps, FormProps, Span } from './props';
import { ElCol, ElForm, ElFormItem, ElIcon, ElRow, ElTooltip, FormItemRule } from 'element-plus';
import { useDefineModel } from '../../hooks/defineModel.h';

/**
 * 将一个数字转换为span对象
 * @param {number} n 数字
 * @returns
 */
function getSpanModel(n: number): Span {
    return { lg: n, md: n, sm: n, xl: n, xs: n };
}

function getSpan(value?: number | Span): Span {
    if (!value) return getSpanModel(24);

    if (typeof value === 'number') return getSpanModel(value);

    return value;
}

/**
 * 修复 element required 无法正确显示的问题(显示英文)
 * @param rules
 * @param required
 * @param label
 * @returns
 */
function mergeRules(item: FormItemTypeProps) {
    const data: FormItemRule[] = [];
    const rules = item.rules;
    if (rules) data.push(...(Array.isArray(rules) ? rules : [rules]));
    if (item.required) {
        data.unshift({
            required: true,
            message: item.label ? `${item.label}是必填项` : '必填项',
            trigger: 'blur',
        });
    }
    return data;
}

const { formProps, ...props } = defineProps<{
    modelValue: Record<keyof any, any>;
    formProps: FormProps;
}>();

// 获取插槽 formItems 的 prop 属性联合类型
type PropKeys = keyof (typeof formProps)['formItems'][number]['prop'];
// prettier-ignore
const slots = defineSlots<
    {
        'insert-before': (value:Record<PropKeys,any>) => VNode[];
        'insert-after': (value:Record<PropKeys,any>) => VNode[];
        'form-items-label': (item:FormItemTypeProps) => VNode[];
    }
    &
    // 使用交叉类型，解决映射的类型不兼容的问题(映射的类型可能不声明属性或方法)
    {
        [key in PropKeys]?: ({ value }) => VNode[];
    }
>();

const emits = defineEmits<{
    'update:modelValue': [Record<PropKeys, any>];
}>();

// const formModel = defineModel<Record<PropKeys, any>>({ required: true });
// const formModel = useVModel(props, 'modelValue', emits);
const formModel = useDefineModel(props, 'modelValue', emits);

const defaultFormModel = formProps.formItems.reduce((acc, item) => {
    if (item.defaultValue !== void 0) acc[item.prop] = item.defaultValue;
    return acc;
}, {});
onMounted(() => {
    formModel.value = Object.assign({}, defaultFormModel, formModel.value);
});
watch(
    () => formModel.value,
    (val) => {
        console.log(val);
    },
);

const attrs = useAttrs();
const options = computed(() => Object.assign({}, formProps, attrs));
const autoAnimateOption = {
    easing: 'ease-out',
    duration: 300,
    disrespectUserMotionPreference: true,
};
const isinlined = formProps.inline || attrs.inline;

const renderItem = (item: FormItemTypeProps) => {
    // 单插槽
    if (slots[item.prop]) return slots[item.prop](item);

    // form-items 插槽
    // if (slots['form-items']) return slots['form-items']({ ...item });
    return <FormItemContent v-model={formModel.value[item.prop]} option={item}></FormItemContent>;
};

const renderLabel = (item: FormItemTypeProps) => {
    // 单插槽
    if (slots[item.prop + '-label']) return slots[item.prop + '-label'](item);

    // all 插槽
    if (slots['form-items-label']) return slots['form-items-label'](item);

    return (
        <>
            <span>{item.label}</span>
            <span style={{ width: '11px', display: 'inline-block' }}>
                {item.tooltip ? (
                    <ElTooltip effect="dark" content={item.tooltip} placement="left">
                        <ElIcon>
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"></path>
                            </svg>
                        </ElIcon>
                    </ElTooltip>
                ) : null}
            </span>
        </>
    );
};

const render = () => {
    return (
        <ElForm ref="formRef" model={formModel.value} {...options.value}>
            <ElRow gutter={10} v-auto-animate={autoAnimateOption}>
                {!!slots['insert-before'] && (
                    <ElCol key="insert-before" {...getSpan(24)}>
                        {slots['insert-before'](formModel.value)}{' '}
                    </ElCol>
                )}

                {formProps.formItems.reduce((acc, item) => {
                    const { props, type, span, rules, ...rest } = item;

                    if (item.controller && !item.controller({ value: formModel.value, option: item })) {
                        return acc;
                    }

                    acc.push(
                        <ElCol key={item.prop} {...getSpan(isinlined ? 24 : span || formProps.spans)}>
                            <ElFormItem {...rest} rules={mergeRules(item)}>
                                {{
                                    default: () => renderItem(item),
                                    label: () => renderLabel(item),
                                }}
                            </ElFormItem>
                        </ElCol>,
                    );

                    return acc;
                }, [] as VNode[])}

                {!!slots['insert-after'] && (
                    <ElCol key="insert-after" {...getSpan(isinlined ? formProps.spans : 24)}>
                        {slots['insert-after'](formModel.value)}
                    </ElCol>
                )}
            </ElRow>
        </ElForm>
    );
};
</script>
<style scoped></style>

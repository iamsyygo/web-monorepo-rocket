import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { ElCol, ElForm, ElFormItem, ElIcon, ElRow, ElTooltip, FormItemRule } from 'element-plus';
import { SlotsType, VNode, defineComponent, onMounted, toRefs } from 'vue';
import { useDefineModel } from '@/hooks/defineModel.h';
import FormContent from './items';
import { FormItemTypeProps, Span, formProps as props } from './props';

export default defineComponent({
    props,
    emits: { 'update:modelValue': (_val: any) => true },
    slots: Object as SlotsType<
        Record<keyof any, (props: FormItemTypeProps) => any> & {
            'insert-after': ({ value: any }) => any;
            'insert-before': ({ value: any }) => any;
        }
    >,
    directives: { 'auto-animate': vAutoAnimate },
    setup(props, { emit, attrs, expose, slots }) {
        // const formRef = ref(null);

        // props 解构响应式只在 script setup 中生效
        // const { formProps, modelValue } = props;

        const { formProps, modelValue } = toRefs(props);

        // 无法使用defineModel defineSlots 编译宏
        // TODO: 不能使用编译宏导致一些 ts 类型提示并不是很友好
        // const model: Record<string, any> = defineModel();
        const model = useDefineModel(props, 'modelValue', emit);

        onMounted(() => {
            // 默认值处理
            const defaultModelValues = props.formProps.formItems.reduce((acc, item) => {
                if (item.defaultValue !== void 0) acc[item.prop] = item.defaultValue;
                return acc;
            }, {});

            // 修改 model.value 为响应式，会 emit 一次 update:modelValue 事件
            model.value = Object.assign({}, defaultModelValues, modelValue.value);
        });

        // 行内表单
        const isInlined = formProps.value.inline || attrs.inline;

        const autoAnimateOption = {
            easing: 'ease-out',
            duration: 300,
            disrespectUserMotionPreference: true,
        };

        const formAttrs = Object.assign({}, formProps.value, attrs);

        const {
            'insert-before': insertBeforeVnode,
            'insert-after': insertAfterVnode,
            'form-items-label': formItemslabel,
        } = slots;

        const defaultItemVnode = (item: FormItemTypeProps, prop: string) => {
            // 单个表单项插槽
            if (slots[prop]) return slots[prop]({ ...item });

            // form-items 插槽
            // if (slots['form-items']) return slots['form-items']({ ...item });
            return <FormContent v-model={model.value[prop]} option={item}></FormContent>;
        };

        const itemLabelVnode = (item: FormItemTypeProps) => {
            if (slots[item.prop + '-label']) return slots[item.prop + '-label']({ ...item });

            if (formItemslabel) return formItemslabel({ ...item });

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

        return () => {
            return (
                <ElForm ref="formRef" model={model.value} {...formAttrs}>
                    <ElRow gutter={10} v-auto-animate={autoAnimateOption}>
                        {!!insertBeforeVnode && (
                            <ElCol key="insert-before" {...getSpan(24)}>
                                {' '}
                                {insertBeforeVnode({ value: props.modelValue })}{' '}
                            </ElCol>
                        )}

                        {formProps.value.formItems.reduce((acc, item) => {
                            const { props, type, span, rules, ...rest } = item;

                            if (item.controller && !item.controller({ value: modelValue.value, option: item })) {
                                return acc;
                            }

                            acc.push(
                                <ElCol key={item.prop} {...getSpan(isInlined ? 24 : span || formProps.value.spans)}>
                                    <ElFormItem {...rest} rules={mergeRules(rules, item.required, item.label)}>
                                        {{
                                            default: () => defaultItemVnode(item, rest.prop),
                                            label: () => itemLabelVnode(item),
                                        }}
                                    </ElFormItem>
                                </ElCol>,
                            );

                            return acc;
                        }, [] as VNode[])}

                        {!!insertAfterVnode && (
                            <ElCol key="insert-after" {...getSpan(isInlined ? formProps.value.spans : 24)}>
                                {slots['insert-after']({ value: props.modelValue })}
                            </ElCol>
                        )}
                    </ElRow>
                </ElForm>
            );
        };
    },
});

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
    if (typeof value === 'number') {
        return getSpanModel(value);
    }
    return value;
}

/**
 * 修复 element required 无法正确显示的问题(显示英文)
 * @param rules
 * @param required
 * @param label
 * @returns
 */
function mergeRules(rules?: FormItemRule[] | FormItemRule, required?: boolean, label?: string) {
    const data: FormItemRule[] = [];
    if (rules) data.push(...(Array.isArray(rules) ? rules : [rules]));
    if (required) {
        data.unshift({
            required: true,
            message: label ? `${label}是必填项` : '必填项',
            trigger: 'blur',
        });
    }
    return data;
}

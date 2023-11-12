import { ElButton, ElCol, ElForm, ElFormItem, ElIcon, ElRow, ElTooltip, FormItemRule } from 'element-plus';
import { SlotsType, VNode, defineComponent, onMounted, toRefs } from 'vue';
import { useDefineModel } from '../../hooks/defineModel.h';
import FormContent from './items';
import { FormItemTypeProps, Span, formProps as props } from './props';
import { vAutoAnimate } from '@formkit/auto-animate/vue';

export default defineComponent({
    props,
    emits: {
        'update:modelValue': (val: any) => true,
    },
    slots: Object as SlotsType<
        // Record<ObjectPropType<FormItemTypeProps[], 'prop'>, (props: FormItemTypeProps) => any>
        Record<keyof any, (props: FormItemTypeProps) => any> & {
            'insert-after': ({ value: any }) => any;
            'insert-before': ({ value: any }) => any;
        }
    >,
    directives: {
        'auto-animate': vAutoAnimate,
    },
    setup(props, { emit, attrs, expose, slots }) {
        // console.log(props, 'props');
        // console.log(slots, 'slots');

        // const formRef = ref(null);

        // setup 未能在 props 解构产生响应式?
        // const { formProps, modelValue } = props;

        const { formProps, modelValue } = toRefs(props);

        // const model: Record<string, any> = defineModel();
        const model = useDefineModel(props, 'modelValue', emit);

        onMounted(() => {
            const defaultModelValues = props.formProps.formItems.reduce((acc, item) => {
                // acc[item.prop] = item.defaultValue;
                if (item.defaultValue !== void 0) acc[item.prop] = item.defaultValue;
                return acc;
            }, {});
            model.value = Object.assign({}, defaultModelValues, modelValue.value);
        });

        // setup 不支持 defineSlots 编译宏
        // defineSlots<Record<ObjectPropType<typeof formProps.formItems, 'prop'>, (props: FormItemTypeProps) => any>>();
        // model.value

        const isInlined = formProps.value.inline || attrs.inline;

        return () => (
            <ElForm ref="formRef" model={model.value} {...formProps.value} {...attrs}>
                <ElRow
                    gutter={10}
                    v-auto-animate={{
                        easing: 'linear',
                        duration: 300,
                        disrespectUserMotionPreference: true,
                    }}
                >
                    {slots['insert-before'] ? (
                        <ElCol key="insert-before" {...getSpan(24)}>
                            {slots['insert-before']({ value: props.modelValue })}
                        </ElCol>
                    ) : null}

                    {formProps.value.formItems.reduce((acc, item) => {
                        const { props, type, span, rules, ...rest } = item;

                        if (item.controller && !item.controller({ value: modelValue.value, option: item })) return acc;

                        acc.push(
                            <ElCol key={item.prop} {...getSpan(isInlined ? 24 : span || formProps.value.spans)}>
                                <ElFormItem {...rest} rules={mergeRules(rules, item.required, item.label)}>
                                    {{
                                        default: () =>
                                            slots[rest.prop]?.({ ...item }) || (
                                                <FormContent
                                                    v-model={model.value[rest.prop]}
                                                    option={item}
                                                ></FormContent>
                                            ),
                                        label: () =>
                                            slots[rest.prop + '-label']?.({ ...item }) ||
                                            slots['form-items-label']?.({ ...item }) || (
                                                <div>
                                                    {item.label}
                                                    <div style={{ width: '11px', display: 'inline-block' }}>
                                                        {item.tooltip ? (
                                                            <ElTooltip
                                                                effect="dark"
                                                                content={item.tooltip}
                                                                placement="right"
                                                            >
                                                                <ElIcon>
                                                                    <svg
                                                                        viewBox="0 0 1024 1024"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        data-v-ea893728=""
                                                                    >
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
                                                                        ></path>
                                                                    </svg>
                                                                </ElIcon>
                                                            </ElTooltip>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            ),
                                    }}
                                </ElFormItem>
                            </ElCol>,
                        );

                        return acc;
                    }, [] as VNode[])}

                    {slots['insert-after'] ? (
                        <ElCol key="insert-after" {...getSpan(isInlined ? formProps.value.spans : 24)}>
                            {slots['insert-after']({ value: props.modelValue })}
                        </ElCol>
                    ) : null}
                </ElRow>
            </ElForm>
        );
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
 * 修复 element 使用国际化时，required 无法正确显示的问题
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

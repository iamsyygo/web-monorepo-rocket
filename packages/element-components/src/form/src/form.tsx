import { ElCol, ElForm, ElFormItem, ElRow } from 'element-plus';
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
            <ElForm ref="formRef" model={model.value} {...formProps} {...attrs}>
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
                        const { props, type, span, ...rest } = item;
                        // return (
                        //     <ElCol {...getSpan(isInlined ? 24 : span || formProps.spans)}>
                        //         <ElFormItem {...rest}>
                        //             {/* <slot name={rest.prop} item={item}>
                        //                 <FormContent v-model={model.value[rest.prop]} option={item}></FormContent>
                        //             </slot> */}
                        //             {slots[rest.prop]?.({ ...item }) || (
                        //                 <FormContent v-model={model.value[rest.prop]} option={item}></FormContent>
                        //             )}
                        //         </ElFormItem>
                        //     </ElCol>
                        // );
                        if (item.controller && !item.controller({ value: modelValue.value, option: item })) return acc;

                        acc.push(
                            <ElCol key={item.prop} {...getSpan(isInlined ? 24 : span || formProps.value.spans)}>
                                <ElFormItem {...rest}>
                                    {slots[rest.prop]?.({ ...item }) || (
                                        <FormContent v-model={model.value[rest.prop]} option={item}></FormContent>
                                    )}
                                </ElFormItem>
                            </ElCol>,
                        );

                        return acc;
                    }, [] as VNode[])}

                    {slots['insert-after'] ? (
                        <ElCol key="insert-after" {...getSpan(isInlined ? 24 : formProps.value.spans)}>
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

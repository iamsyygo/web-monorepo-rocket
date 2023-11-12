import { defineComponent, ref, PropType } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElRow, ElCol } from 'element-plus';
import { FormItemTypeProps, ObjectPropType, Span, formProps } from './props';
import FormContent from './items';
import { useDefineModel } from '../../hooks/defineModel.h';

export default defineComponent({
    props: formProps,
    emits: {
        'update:modelValue': (val: any) => true,
    },
    // slots: ['default'],
    setup(props, { emit, attrs, expose, slots }) {
        console.log(props);

        // const formRef = ref(null);
        const { formProps } = props;
        // const model: Record<string, any> = defineModel();
        const model = useDefineModel(props, 'modelValue', emit);

        // setup 不支持 defineSlots 编译宏
        // defineSlots<Record<ObjectPropType<typeof options.formItems, 'prop'>, (props: FormItemTypeProps) => any>>();
        // model.value

        const isInlined = formProps.inline || attrs.inline;

        return () => (
            <ElForm ref="formRef" model={model.value} {...formProps} {...attrs}>
                <ElRow gutter={10}>
                    {formProps.formItems.map((item) => {
                        const { props, type, span, ...rest } = item;
                        return (
                            <ElCol {...getSpan(isInlined ? 24 : span || formProps.spans)}>
                                <ElFormItem {...rest}>
                                    <slot name={rest.prop} item={item}>
                                        <FormContent v-model={model.value[rest.prop]} option={item}></FormContent>
                                    </slot>
                                </ElFormItem>
                            </ElCol>
                        );
                    })}
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

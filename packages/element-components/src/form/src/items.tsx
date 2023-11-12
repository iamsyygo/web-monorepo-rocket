import { ElInput, ElSelect } from 'element-plus';
import { PropType, defineComponent } from 'vue';
import { FormItemType, FormItemTypeProps } from './props';
import { useDefineModel } from '../../hooks/defineModel.h';

export default defineComponent({
    props: {
        option: {
            type: Object as PropType<FormItemTypeProps>,
            default: () => {},
        },
        modelValue: {
            type: [String, Number, Boolean, Array, Object] as PropType<any>,
        },
    },
    emits: {
        'update:modelValue': (val: any) => true,
    },
    setup(props, { emit, attrs, expose, slots }) {
        // const formRef = ref(null);
        const { option } = props;
        // const value = defineModel();
        const value = useDefineModel(props, 'modelValue', emit);

        return () => {
            const itemAttrs = Object.assign({}, option, attrs);
            switch (option.type) {
                case 'input':
                    return <ElInput v-model={value.value} {...itemAttrs}></ElInput>;
                case 'select':
                    return (
                        <ElSelect v-model={value.value} {...itemAttrs}>
                            {option.options?.map((item) => {
                                const { label = 'label', value = 'value', key } = option.optionProps || {};
                                return (
                                    <ElSelect.Option
                                        label={item[label]}
                                        value={item[value]}
                                        key={item[key || value]}
                                    ></ElSelect.Option>
                                );
                            })}
                        </ElSelect>
                    );
                // case 'color':
                //     return <ElColorPicker v-model={value.value} {...option}></ElColorPicker>;
                // case 'checkbox':
                //     return <ElCheckbox v-model={value.value} {...option}></ElCheckbox>;

                default:
                    return <ElInput v-model={value.value} {...itemAttrs}></ElInput>;
            }
        };
    },
});

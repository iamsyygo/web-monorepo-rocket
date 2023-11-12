import { ElInput, ElRadio, ElRadioGroup, ElSelect, ElSlider, ElSwitch } from 'element-plus';
import { PropType, defineComponent, onMounted, reactive } from 'vue';
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
        // const { option } = props;

        const selectOptions = reactive<{
            state: boolean;
            list: any[];
        }>({
            state: false,
            list: [],
        });

        if (props.option.type === 'select' || 'radio' === props.option.type) {
            if (Array.isArray(props.option.options)) {
                selectOptions.list = props.option.options;
            } else {
                selectOptions.state = true;

                // is Promise Or Function 都使用 Promise.resolve 处理返回，不需要判断 Promise 或 Function
                Promise.resolve(props.option.options())
                    .then((res) => {
                        selectOptions.list = res;
                    })
                    .finally(() => {
                        selectOptions.state = false;
                    });
            }
        }

        // const value = defineModel();
        const modelValueCopy = useDefineModel(props, 'modelValue', emit);

        return () => {
            const itemAttrs = Object.assign({}, props.option, attrs);
            const option = props.option;
            switch (option.type) {
                case 'input':
                    return <ElInput v-model={modelValueCopy.value} {...itemAttrs}></ElInput>;
                case 'select':
                    // 这里处理会循环渲染 render 函数，导致无限循环
                    // selectOptions.list = option.options;
                    // if(option.options instanceof Promise) {}
                    // if(option.options instanceof Function) {}

                    return (
                        <ElSelect v-model={modelValueCopy.value} {...itemAttrs} loading={selectOptions.state}>
                            {selectOptions.list?.map((item) => {
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

                case 'switch':
                    return <ElSwitch v-model={modelValueCopy.value} {...itemAttrs}></ElSwitch>;

                case 'textarea':
                    return <ElInput v-model={modelValueCopy.value} {...itemAttrs}></ElInput>;

                case 'radio':
                    return (
                        <ElRadioGroup v-model={modelValueCopy.value} {...itemAttrs}>
                            {selectOptions.list?.map((item) => {
                                const { label = 'label', value = 'value', key } = option.optionProps || {};
                                return (
                                    <ElRadio label={item[value]} key={item[key || value]}>
                                        {item[label]}
                                    </ElRadio>
                                );
                            })}
                        </ElRadioGroup>
                    );
                case 'slider':
                    return <ElSlider v-model={modelValueCopy.value} {...itemAttrs}></ElSlider>;

                default:
                    return <ElInput v-model={modelValueCopy.value} {...itemAttrs}></ElInput>;
            }
        };
    },
});

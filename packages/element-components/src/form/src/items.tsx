import {
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElColorPicker,
    ElDatePicker,
    ElInput,
    ElInputNumber,
    ElRadio,
    ElRadioGroup,
    ElSelect,
    ElSlider,
    ElSwitch,
} from 'element-plus';
import { PropType, defineComponent, reactive } from 'vue';
import { useDefineModel } from '../../hooks/defineModel.h';
import { FormItemTypeProps } from './props';

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
    emits: { 'update:modelValue': (val: any) => true },
    setup(props, { emit, attrs, expose, slots }) {
        // 存储 select options
        const selectOptions = reactive<{
            state: boolean;
            list: any[];
        }>({
            state: false,
            list: [],
        });

        if (
            props.option.type === 'select' ||
            'radio' === props.option.type ||
            'checkbox' === props.option.type ||
            'checkboxButton' === props.option.type
        ) {
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
            const itemAttrs = Object.assign({}, props.option.props, attrs);
            const option = props.option;

            if (['date', 'datetime', 'daterange', 'datetimerange', 'year', 'month'].includes(option.type)) {
                // itemAttrs['value-format'] = itemAttrs['value-format'] ?? 'yyyy-MM-dd HH:mm:ss';
                // @ts-expect-error
                return <ElDatePicker v-model={modelValueCopy.value} {...itemAttrs} type={option.type}></ElDatePicker>;
            }

            switch (option.type) {
                case 'input':
                    return <ElInput v-model={modelValueCopy.value} {...itemAttrs}></ElInput>;
                case 'inputNumber':
                    return <ElInputNumber v-model={modelValueCopy.value} {...itemAttrs}></ElInputNumber>;
                case 'select':
                    // 这里处理会循环渲染 render 函数，导致无限循环
                    // selectOptions.list = option.options;
                    // if(option.options instanceof Promise) {}
                    // if(option.options instanceof Function) {}

                    return (
                        <ElSelect
                            v-model={modelValueCopy.value}
                            style={{ width: '100%' }}
                            {...itemAttrs}
                            loading={selectOptions.state}
                        >
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

                case 'checkbox':
                    return (
                        <ElCheckboxGroup v-model={modelValueCopy.value} {...itemAttrs}>
                            {selectOptions.list?.map((item) => {
                                const { label = 'label', value = 'value', key } = option.optionProps || {};
                                return (
                                    <ElCheckbox label={item[value]} key={item[key || value]}>
                                        {item[label]}
                                    </ElCheckbox>
                                );
                            })}
                        </ElCheckboxGroup>
                    );

                case 'checkboxButton':
                    return (
                        <ElCheckboxGroup v-model={modelValueCopy.value} {...itemAttrs}>
                            {selectOptions.list?.map((item) => {
                                const { label = 'label', value = 'value', key } = option.optionProps || {};
                                return (
                                    <ElCheckboxButton label={item[value]} key={item[key || value]}>
                                        {item[label]}
                                    </ElCheckboxButton>
                                );
                            })}
                        </ElCheckboxGroup>
                    );

                case 'color-picker':
                    return <ElColorPicker v-model={modelValueCopy.value} {...itemAttrs}></ElColorPicker>;

                // date | datetime | daterange | datetimerange | year | month
                // case ['date', 'datetime', 'daterange', 'datetimerange', 'year', 'month'].includes(option.type):
                //     return <ElInput v-model={modelValueCopy.value} {...itemAttrs}></ElInput>;

                case 'custom':
                    return slots['custom']?.(itemAttrs) ?? null;

                default:
                    return (<ElInput v-model={modelValueCopy.value} {...itemAttrs}></ElInput>) as never;
            }
        };
    },
});

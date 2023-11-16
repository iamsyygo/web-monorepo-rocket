import { SlotsType } from 'vue';
import { FormItemTypeProps } from './props';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: import("vue").PropType<import("./props").FormProps>;
        default: () => {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (_val: any) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: import("vue").PropType<import("./props").FormProps>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((_val: any) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    formProps: import("./props").FormProps;
}, SlotsType<Record<string | number | symbol, (props: FormItemTypeProps) => any> & {
    'insert-after': ({ value: any }: {
        value: any;
    }) => any;
    'insert-before': ({ value: any }: {
        value: any;
    }) => any;
}>>;
export default _default;

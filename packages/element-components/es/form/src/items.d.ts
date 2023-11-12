import { PropType } from 'vue';
import { FormItemTypeProps } from './props';
declare const _default: import("vue").DefineComponent<{
    option: {
        type: PropType<FormItemTypeProps>;
        default: () => void;
    };
    modelValue: {
        type: PropType<any>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: PropType<FormItemTypeProps>;
        default: () => void;
    };
    modelValue: {
        type: PropType<any>;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    option: FormItemTypeProps;
}, {}>;
export default _default;

export declare const AoeForm: import("@aoe/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: import("vue").PropType<import("./src/props").FormProps>;
        default: () => {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: import("vue").PropType<import("./src/props").FormProps>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    formProps: import("./src/props").FormProps;
}, {}>> & Record<string, any>;
export default AoeForm;
export * from './src/props';

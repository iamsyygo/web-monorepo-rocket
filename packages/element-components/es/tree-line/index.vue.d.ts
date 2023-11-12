import Node from 'element-plus/es/components/tree/src/model/node';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<Node>;
        required: true;
    };
    indent: {
        type: import("vue").PropType<number>;
        required: true;
    };
    showCheckbox: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    node: {
        type: import("vue").PropType<Node>;
        required: true;
    };
    indent: {
        type: import("vue").PropType<number>;
        required: true;
    };
    showCheckbox: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

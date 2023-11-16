import type { Router } from 'vue-router';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    menus: {
        type: import("vue").PropType<import("./src/aside/type").Menu[]>;
        required: true;
    };
    router: {
        type: import("vue").PropType<Router>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    menus: {
        type: import("vue").PropType<import("./src/aside/type").Menu[]>;
        required: true;
    };
    router: {
        type: import("vue").PropType<Router>;
        required: true;
    };
}>>, {}, {}>, {
    "head-left"?(_: {}): any;
    "head-center"?(_: {}): any;
    "head-right"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

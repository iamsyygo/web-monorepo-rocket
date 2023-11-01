export interface LayoutOption {
    headerHeight: number;
    asideWidth: number;
    /**computed,
     * ham: header aside main
     * ahm: aside header main
     * hm: header main
     * am: aside main
     */
    typography: 'ham' | 'ahm' | 'hm' | 'am';
    backgroundColor?: string;
    headerStyle: Partial<CSSStyleDeclaration>;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    layout: {
        type: import("vue").PropType<LayoutOption>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    layout: {
        type: import("vue").PropType<LayoutOption>;
        required: true;
    };
}>>, {}, {}>, {
    header?(_: {}): any;
    aside?(_: {}): any;
    main?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

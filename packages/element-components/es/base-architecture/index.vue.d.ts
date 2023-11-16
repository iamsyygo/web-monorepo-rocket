export interface ArchitectureOption {
    headerHeight: number;
    asideWidth: number;
    /**
     * ham: header aside main
     * ahm: aside header main
     * hm: header main
     * am: aside main
     */
    typography: 'ham' | 'ahm' | 'hm' | 'am';
    headerStyle?: Partial<CSSStyleDeclaration>;
    asideStyle?: Partial<CSSStyleDeclaration>;
    primary: string;
    effect?: 'light' | 'dark';
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    option: {
        type: import("vue").PropType<ArchitectureOption>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    option: {
        type: import("vue").PropType<ArchitectureOption>;
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

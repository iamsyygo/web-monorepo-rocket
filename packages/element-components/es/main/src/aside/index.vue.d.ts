declare const _default: import("vue").DefineComponent<{
    asideWidth: {
        type: import("vue").PropType<number>;
    };
    menus: {
        type: import("vue").PropType<import("./type").Menu[]>;
        required: true;
    };
    defaultMenuPathActive: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    collapse: (width: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    asideWidth: {
        type: import("vue").PropType<number>;
    };
    menus: {
        type: import("vue").PropType<import("./type").Menu[]>;
        required: true;
    };
    defaultMenuPathActive: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
    onCollapse?: ((width: number) => any) | undefined;
}, {}, {}>;
export default _default;

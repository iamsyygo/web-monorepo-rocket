declare const _default: import("vue").DefineComponent<{
    modelValue: {
        required: true;
        type: import("vue").PropType<string | number>;
    };
    tabs: import("vue").PropType<Record<string, unknown>[]>;
    props: {
        type: import("vue").PropType<{
            label?: string | undefined;
            key: string | number;
            icon?: string | undefined;
            disabled?: boolean | undefined;
        }>;
        required: true;
    };
    width: {
        type: import("vue").PropType<number>;
        default: number;
    };
    height: {
        type: import("vue").PropType<number>;
        default: number;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    fontSize: {
        type: import("vue").PropType<number>;
        default: number;
    };
    highlightBgColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    highlightFontColor: {
        type: import("vue").PropType<string>;
    };
    radius: {
        type: import("vue").PropType<number>;
        default: number;
    };
    hoverBg: {
        type: import("vue").PropType<string>;
        default: string;
    };
    append: {
        type: import("vue").PropType<"before" | "after">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (args_0: MouseEvent, args_1: Record<string, unknown>) => void;
    contextmenu: (args_0: MouseEvent, args_1: Record<string, unknown>) => void;
    "tab-change": (k: string, tab: Record<string, unknown>) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        required: true;
        type: import("vue").PropType<string | number>;
    };
    tabs: import("vue").PropType<Record<string, unknown>[]>;
    props: {
        type: import("vue").PropType<{
            label?: string | undefined;
            key: string | number;
            icon?: string | undefined;
            disabled?: boolean | undefined;
        }>;
        required: true;
    };
    width: {
        type: import("vue").PropType<number>;
        default: number;
    };
    height: {
        type: import("vue").PropType<number>;
        default: number;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    fontSize: {
        type: import("vue").PropType<number>;
        default: number;
    };
    highlightBgColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    highlightFontColor: {
        type: import("vue").PropType<string>;
    };
    radius: {
        type: import("vue").PropType<number>;
        default: number;
    };
    hoverBg: {
        type: import("vue").PropType<string>;
        default: string;
    };
    append: {
        type: import("vue").PropType<"before" | "after">;
    };
}>> & {
    onClick?: ((args_0: MouseEvent, args_1: Record<string, unknown>) => any) | undefined;
    onContextmenu?: ((args_0: MouseEvent, args_1: Record<string, unknown>) => any) | undefined;
    "onTab-change"?: ((k: string, tab: Record<string, unknown>) => any) | undefined;
}, {
    width: number;
    height: number;
    backgroundColor: string;
    fontSize: number;
    highlightBgColor: string;
    radius: number;
    hoverBg: string;
}, {}>;
export default _default;

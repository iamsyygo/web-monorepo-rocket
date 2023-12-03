export declare const AoeTabPanel: import("@aoe/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabs: {
        type: import("vue").PropType<import("./index.vue").Tab[]>;
        default: () => never[];
    };
    autoHiddenCloseIconWidth: {
        type: NumberConstructor;
        default: number;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    gap: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: FunctionConstructor;
    };
    insertToAfter: {
        type: BooleanConstructor;
        default: boolean;
    };
    isMousedownActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    setTabRef: (el: Element | import("vue").ComponentPublicInstance | null, tab: import("./index.vue").Tab) => void;
    setContentRef: (el: Element | import("vue").ComponentPublicInstance | null) => void;
    setAfterRef: (el: Element | import("vue").ComponentPublicInstance | null) => void;
    tabWidth: import("vue").Ref<number>;
    handleDelete: (tab: import("./index.vue").Tab, i: number) => false | undefined;
    handleContextMenu: (e: Event, tab: import("./index.vue").Tab, i: number) => void;
    showTabCloseIcon: (tab: import("./index.vue").Tab) => boolean;
    handleNativeClick: (e: Event, tab: import("./index.vue").Tab, i: number) => void;
    doLayout: () => void;
    init: () => void;
    addTab: (tab: import("./index.vue").Tab) => void;
    removeTab: (tabKey: string | number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "click" | "contextmenu" | "remove" | "dragstart" | "dragging" | "dragend" | "swap")[], "update:modelValue" | "click" | "contextmenu" | "remove" | "dragstart" | "dragging" | "dragend" | "swap", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabs: {
        type: import("vue").PropType<import("./index.vue").Tab[]>;
        default: () => never[];
    };
    autoHiddenCloseIconWidth: {
        type: NumberConstructor;
        default: number;
    };
    minWidth: {
        type: NumberConstructor;
        default: number;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    gap: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: FunctionConstructor;
    };
    insertToAfter: {
        type: BooleanConstructor;
        default: boolean;
    };
    isMousedownActive: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onDragend?: ((...args: any[]) => any) | undefined;
    onDragstart?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onContextmenu?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onDragging?: ((...args: any[]) => any) | undefined;
    onSwap?: ((...args: any[]) => any) | undefined;
}, {
    gap: number;
    maxWidth: number;
    minWidth: number;
    modelValue: string | number;
    tabs: import("./index.vue").Tab[];
    autoHiddenCloseIconWidth: number;
    insertToAfter: boolean;
    isMousedownActive: boolean;
}, {}>> & Record<string, any>;
export declare const AoeTabPanelPro: import("@aoe/utils").SFCWithInstall<import("vue").DefineComponent<{
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
}, {}>> & Record<string, any>;
export default AoeTabPanel;

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
export default AoeTabPanel;

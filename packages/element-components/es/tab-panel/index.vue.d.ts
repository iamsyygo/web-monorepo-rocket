import { PropType, ComponentPublicInstance } from 'vue';
export interface Tab {
    label: string;
    key: string;
    favico?: string;
    icon?: string;
    closable?: boolean;
    swappable?: boolean;
    dragable?: boolean;
    $el?: HTMLElement;
    _instance?: any;
    _x?: number;
    [key: string]: any;
}
export interface Refs {
    [key: string]: Element | null;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabs: {
        type: PropType<Tab[]>;
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
    setTabRef: (el: Element | ComponentPublicInstance | null, tab: Tab) => void;
    setContentRef: (el: Element | ComponentPublicInstance | null) => void;
    setAfterRef: (el: Element | ComponentPublicInstance | null) => void;
    tabWidth: import("vue").Ref<number>;
    handleDelete: (tab: Tab, i: number) => false | undefined;
    handleContextMenu: (e: Event, tab: Tab, i: number) => void;
    showTabCloseIcon: (tab: Tab) => boolean;
    handleNativeClick: (e: Event, tab: Tab, i: number) => void;
    doLayout: () => void;
    init: () => void;
    addTab: (tab: Tab) => void;
    removeTab: (tabKey: string | number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:modelValue" | "remove" | "dragstart" | "dragging" | "dragend" | "swap" | "contextmenu")[], "click" | "update:modelValue" | "remove" | "dragstart" | "dragging" | "dragend" | "swap" | "contextmenu", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabs: {
        type: PropType<Tab[]>;
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
    tabs: Tab[];
    autoHiddenCloseIconWidth: number;
    insertToAfter: boolean;
    isMousedownActive: boolean;
}, {}>;
export default _default;

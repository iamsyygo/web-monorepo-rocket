import { AllowedComponentProps } from 'vue';
import { ComponentCustomProperties } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { DebuggerEvent } from 'vue';
import { default as default_2 } from 'element-plus/es/components/tree/src/model/node.mjs';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Menu } from './src/aside/type';
import { nextTick } from 'vue';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { Router } from 'vue-router';
import { SFCWithInstall } from '@aoe/utils';
import { ShallowUnwrapRef } from 'vue';
import { Slot } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';
import { VNodeRef } from 'vue';
import { WatchOptions } from 'vue';
import { WatchStopHandle } from 'vue';

export declare const AoeBaseArchitecture: SFCWithInstall<    {
new (...args: any[]): {
$: ComponentInternalInstance;
$data: {};
$props: {
readonly option: ArchitectureOption;
style?: unknown;
key?: string | number | symbol | undefined;
ref?: VNodeRef | undefined;
ref_for?: boolean | undefined;
ref_key?: string | undefined;
onVnodeBeforeMount?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeMounted?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeBeforeUpdate?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeUpdated?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeBeforeUnmount?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeUnmounted?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
class?: unknown;
};
$attrs: {
[x: string]: unknown;
};
$refs: {
[x: string]: unknown;
};
$slots: Readonly<{
[name: string]: Slot<any> | undefined;
}>;
$root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
$parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
$emit: (event: string, ...args: any[]) => void;
$el: any;
$options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
option: {
type: PropType<ArchitectureOption>;
required: true;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
beforeCreate?: ((() => void) | (() => void)[]) | undefined;
created?: ((() => void) | (() => void)[]) | undefined;
beforeMount?: ((() => void) | (() => void)[]) | undefined;
mounted?: ((() => void) | (() => void)[]) | undefined;
beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
updated?: ((() => void) | (() => void)[]) | undefined;
activated?: ((() => void) | (() => void)[]) | undefined;
deactivated?: ((() => void) | (() => void)[]) | undefined;
beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
destroyed?: ((() => void) | (() => void)[]) | undefined;
unmounted?: ((() => void) | (() => void)[]) | undefined;
renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
};
$forceUpdate: () => void;
$nextTick: nextTick;
$watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
} & Readonly<ExtractPropTypes<    {
option: {
type: PropType<ArchitectureOption>;
required: true;
};
}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties & {};
__isFragment?: undefined;
__isTeleport?: undefined;
__isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
option: {
type: PropType<ArchitectureOption>;
required: true;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
$slots: {
header?(_: {}): any;
aside?(_: {}): any;
main?(_: {}): any;
};
})> & Record<string, any>;

export declare const AoeForm: SFCWithInstall<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>> & Record<string, any>;

export declare const AoeMain: SFCWithInstall<DefineComponent<    {
menus: {
type: PropType<Menu[]>;
required: true;
};
router: {
type: PropType<Router>;
required: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
menus: {
type: PropType<Menu[]>;
required: true;
};
router: {
type: PropType<Router>;
required: true;
};
}>>, {}, {}>> & Record<string, any>;

export declare const AoeNotFound: SFCWithInstall<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>> & Record<string, any>;

export declare const AoeSymbolIcon: SFCWithInstall<DefineComponent<    {
name: {
type: PropType<any>;
required: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
name: {
type: PropType<any>;
required: true;
};
}>>, {}, {}>> & Record<string, any>;

export declare const AoeTabPanel: SFCWithInstall<DefineComponent<    {
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
tabWidth: Ref<number>;
handleDelete: (tab: Tab, i: number) => false | undefined;
handleContextMenu: (e: Event, tab: Tab, i: number) => void;
showTabCloseIcon: (tab: Tab) => boolean;
handleNativeClick: (e: Event, tab: Tab, i: number) => void;
doLayout: () => void;
init: () => void;
addTab: (tab: Tab) => void;
removeTab: (tabKey: string | number) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("click" | "update:modelValue" | "remove" | "dragstart" | "dragging" | "dragend" | "swap" | "contextmenu")[], "click" | "update:modelValue" | "remove" | "dragstart" | "dragging" | "dragend" | "swap" | "contextmenu", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
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
}, {}>> & Record<string, any>;

export declare const AoeTreeLine: SFCWithInstall<    {
new (...args: any[]): {
$: ComponentInternalInstance;
$data: {};
$props: {
style?: unknown;
key?: string | number | symbol | undefined;
ref?: VNodeRef | undefined;
ref_for?: boolean | undefined;
ref_key?: string | undefined;
onVnodeBeforeMount?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeMounted?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeBeforeUpdate?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeUpdated?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>, oldVNode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeBeforeUnmount?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
onVnodeUnmounted?: ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void) | ((vnode: VNode<RendererNode, RendererElement, {
[key: string]: any;
}>) => void)[] | undefined;
class?: unknown;
readonly node: default_2;
readonly indent: number;
readonly showCheckbox: boolean;
};
$attrs: {
[x: string]: unknown;
};
$refs: {
[x: string]: unknown;
};
$slots: Readonly<{
[name: string]: Slot<any> | undefined;
}>;
$root: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
$parent: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
$emit: (event: string, ...args: any[]) => void;
$el: any;
$options: ComponentOptionsBase<Readonly<ExtractPropTypes<    {
node: {
type: PropType<default_2>;
required: true;
};
indent: {
type: PropType<number>;
required: true;
};
showCheckbox: {
type: PropType<boolean>;
required: true;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
beforeCreate?: ((() => void) | (() => void)[]) | undefined;
created?: ((() => void) | (() => void)[]) | undefined;
beforeMount?: ((() => void) | (() => void)[]) | undefined;
mounted?: ((() => void) | (() => void)[]) | undefined;
beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
updated?: ((() => void) | (() => void)[]) | undefined;
activated?: ((() => void) | (() => void)[]) | undefined;
deactivated?: ((() => void) | (() => void)[]) | undefined;
beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
destroyed?: ((() => void) | (() => void)[]) | undefined;
unmounted?: ((() => void) | (() => void)[]) | undefined;
renderTracked?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
renderTriggered?: (((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[]) | undefined;
errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
};
$forceUpdate: () => void;
$nextTick: nextTick;
$watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
} & Readonly<ExtractPropTypes<    {
node: {
type: PropType<default_2>;
required: true;
};
indent: {
type: PropType<number>;
required: true;
};
showCheckbox: {
type: PropType<boolean>;
required: true;
};
}>> & ShallowUnwrapRef<    {}> & {} & ComponentCustomProperties & {};
__isFragment?: undefined;
__isTeleport?: undefined;
__isSuspense?: undefined;
} & ComponentOptionsBase<Readonly<ExtractPropTypes<    {
node: {
type: PropType<default_2>;
required: true;
};
indent: {
type: PropType<number>;
required: true;
};
showCheckbox: {
type: PropType<boolean>;
required: true;
};
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
$slots: {
default?(_: {}): any;
};
})> & Record<string, any>;

declare interface ArchitectureOption {
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
}

declare interface Tab {
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

export { }

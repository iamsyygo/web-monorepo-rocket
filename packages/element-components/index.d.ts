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
import { nextTick } from 'vue';
import { PropType } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
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

export declare const AoeMain: SFCWithInstall<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>> & Record<string, any>;

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
    backgroundColor?: string;
    headerStyle: Partial<CSSStyleDeclaration>;
}

export { }

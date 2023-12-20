declare const _default: import("vue").DefineComponent<{
    tableProps: {
        type: import("vue").PropType<import("./porps").BasicsPageTableProps>;
        default: () => {};
    };
    searchProps: {
        type: import("vue").PropType<import("./porps").BasicsPageFormProps>;
        default: () => {};
    };
    paginationProps: {
        type: import("vue").PropType<{
            readonly small?: boolean | undefined;
            readonly popperClass?: string | undefined;
            readonly teleported?: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly disabled?: boolean | undefined;
            readonly layout?: string | undefined;
            readonly background?: boolean | undefined;
            readonly pagerCount?: number | undefined;
            readonly pageSizes?: number[] | undefined;
            readonly prevText?: string | undefined;
            readonly prevIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly nextText?: string | undefined;
            readonly nextIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly hideOnSinglePage?: boolean | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            readonly pageSize?: number | undefined;
            readonly defaultPageSize?: number | undefined;
            readonly total?: number | undefined;
            readonly pageCount?: number | undefined;
            readonly currentPage?: number | undefined;
            readonly defaultCurrentPage?: number | undefined;
            "onUpdate:current-page"?: ((val: number) => any) | undefined;
            "onUpdate:page-size"?: ((val: number) => any) | undefined;
            "onSize-change"?: ((val: number) => any) | undefined;
            "onCurrent-change"?: ((val: number) => any) | undefined;
            "onPrev-click"?: ((val: number) => any) | undefined;
            "onNext-click"?: ((val: number) => any) | undefined;
        }>;
        default: () => {};
    };
    getTableData: {
        type: import("vue").PropType<import("./porps").GetTableData<any>>;
        required: boolean;
        default: () => Promise<{
            data: never[];
            total: number;
        }>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tableProps: {
        type: import("vue").PropType<import("./porps").BasicsPageTableProps>;
        default: () => {};
    };
    searchProps: {
        type: import("vue").PropType<import("./porps").BasicsPageFormProps>;
        default: () => {};
    };
    paginationProps: {
        type: import("vue").PropType<{
            readonly small?: boolean | undefined;
            readonly popperClass?: string | undefined;
            readonly teleported?: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            readonly disabled?: boolean | undefined;
            readonly layout?: string | undefined;
            readonly background?: boolean | undefined;
            readonly pagerCount?: number | undefined;
            readonly pageSizes?: number[] | undefined;
            readonly prevText?: string | undefined;
            readonly prevIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly nextText?: string | undefined;
            readonly nextIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
            readonly hideOnSinglePage?: boolean | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            readonly pageSize?: number | undefined;
            readonly defaultPageSize?: number | undefined;
            readonly total?: number | undefined;
            readonly pageCount?: number | undefined;
            readonly currentPage?: number | undefined;
            readonly defaultCurrentPage?: number | undefined;
            "onUpdate:current-page"?: ((val: number) => any) | undefined;
            "onUpdate:page-size"?: ((val: number) => any) | undefined;
            "onSize-change"?: ((val: number) => any) | undefined;
            "onCurrent-change"?: ((val: number) => any) | undefined;
            "onPrev-click"?: ((val: number) => any) | undefined;
            "onNext-click"?: ((val: number) => any) | undefined;
        }>;
        default: () => {};
    };
    getTableData: {
        type: import("vue").PropType<import("./porps").GetTableData<any>>;
        required: boolean;
        default: () => Promise<{
            data: never[];
            total: number;
        }>;
    };
}>>, {
    tableProps: import("./porps").BasicsPageTableProps;
    searchProps: import("./porps").BasicsPageFormProps;
    paginationProps: {
        readonly small?: boolean | undefined;
        readonly popperClass?: string | undefined;
        readonly teleported?: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
        readonly disabled?: boolean | undefined;
        readonly layout?: string | undefined;
        readonly background?: boolean | undefined;
        readonly pagerCount?: number | undefined;
        readonly pageSizes?: number[] | undefined;
        readonly prevText?: string | undefined;
        readonly prevIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
        readonly nextText?: string | undefined;
        readonly nextIcon?: import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown> | undefined;
        readonly hideOnSinglePage?: boolean | undefined;
        style?: unknown;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        readonly pageSize?: number | undefined;
        readonly defaultPageSize?: number | undefined;
        readonly total?: number | undefined;
        readonly pageCount?: number | undefined;
        readonly currentPage?: number | undefined;
        readonly defaultCurrentPage?: number | undefined;
        "onUpdate:current-page"?: ((val: number) => any) | undefined;
        "onUpdate:page-size"?: ((val: number) => any) | undefined;
        "onSize-change"?: ((val: number) => any) | undefined;
        "onCurrent-change"?: ((val: number) => any) | undefined;
        "onPrev-click"?: ((val: number) => any) | undefined;
        "onNext-click"?: ((val: number) => any) | undefined;
    };
    getTableData: import("./porps").GetTableData<any>;
}, {}>;
export default _default;

import { ExtractPropTypes, PropType } from 'vue';
import Table from '../table';
import { FormProps } from '../form';
import { ElPagination } from 'element-plus';
/**
 * 将element-plus的props中的某些属性去掉
 * @example
 * type Props = {
 *   a: string;
 *   b: number;
 *   c: boolean;
 * }
 * type OmitProps = OmitElementProp<Props, 'a' | 'b'>;
 */
export type OmitElementProp<T, K extends keyof T> = Omit<ExtractPropTypes<T>, K>;
export type BasicsPageTableProps = OmitElementProp<InstanceType<typeof Table>['$props'], 'data'>;
export type BasicsPageFormProps = Omit<FormProps, 'inline'> & {
    immediately?: boolean;
};
export type PaginationParams = {
    pageNo: number;
    pageSize: number;
};
type TableDataResponse = {
    data: any[];
    total: number;
};
export type GetTableData<T = any> = (params: T & PaginationParams) => Promise<TableDataResponse>;
export type PaginationProps = InstanceType<typeof ElPagination>['$props'];
/**
 * TODO: getTableData 尽可能支持类型推导
 */
export declare const props: {
    tableProps: {
        type: PropType<BasicsPageTableProps>;
        default: () => {};
    };
    searchProps: {
        type: PropType<BasicsPageFormProps>;
        default: () => {};
    };
    paginationProps: {
        type: PropType<{
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
        type: PropType<GetTableData<any>>;
        required: boolean;
        default: () => Promise<{
            data: never[];
            total: number;
        }>;
    };
};
export {};

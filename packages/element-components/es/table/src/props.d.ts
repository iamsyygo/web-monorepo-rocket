import { PropType } from 'vue';
import { TableColumnCtx } from 'element-plus';
export type DataItem = Record<string, any>;
export interface ITableItemProp extends Partial<TableColumnCtx<DataItem>> {
    [key: string]: any;
}
export type TableItems = ITableItemProp[];
export declare const props: {
    columns: {
        type: PropType<TableItems>;
        default: () => never[];
    };
    showOverflowTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    storeUniqueKey: {
        type: StringConstructor;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultShowCount: {
        type: NumberConstructor;
        default: number;
    };
    showSerialNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
    size: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: BooleanConstructor;
    rowKey: PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
    rowClassName: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
    rowStyle: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
    cellClassName: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
    cellStyle: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
    headerRowClassName: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
    headerRowStyle: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
    headerCellClassName: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
    headerCellStyle: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: PropType<Partial<Pick<import("element-plus").ElTooltipProps, "offset" | "effect" | "popperClass" | "popperOptions" | "placement" | "showArrow" | "enterable" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: PropType<((data: {
        row: any;
        rowIndex: number;
        column: TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined) | undefined>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
};
export interface TableConfig {
    border: boolean;
    showOverflowTooltip: boolean;
    columns: TableItems;
    size: 'large' | 'small' | 'default';
    stripe: boolean;
    highlightCurrentRow: boolean;
}

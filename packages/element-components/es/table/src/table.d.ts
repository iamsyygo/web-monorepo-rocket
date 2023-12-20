import { TableItems } from './props';
declare const _default: import("vue").DefineComponent<{
    columns: {
        type: import("vue").PropType<TableItems>;
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
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
    cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
    headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
    headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
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
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: import("vue").PropType<TableItems>;
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
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
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
    rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").SummaryMethod<any> | undefined>;
    rowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
    rowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
    cellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
    cellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
    headerRowClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnCls<any> | undefined>;
    headerRowStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").ColumnStyle<any> | undefined>;
    headerCellClassName: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellCls<any> | undefined>;
    headerCellStyle: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("element-plus/es/components/table/src/table/defaults.mjs").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: import("vue").PropType<((data: {
        row: any;
        rowIndex: number;
        column: import("element-plus/es/components/table/src/table-column/defaults.mjs").TableColumnCtx<any>;
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
        type: import("vue").PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: import("vue").PropType<((row: any, treeNode: import("element-plus/es/components/table/src/table/defaults.mjs").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: import("vue").PropType<"fixed" | "auto">;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
}>>, {
    style: import("vue").CSSProperties;
    className: string;
    columns: TableItems;
    showOverflowTooltip: boolean;
    sortable: boolean;
    defaultShowCount: number;
    showSerialNumber: boolean;
    data: any[];
    fit: boolean;
    stripe: boolean;
    border: boolean;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
    treeProps: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    lazy: boolean;
    tableLayout: "fixed" | "auto";
    scrollbarAlwaysOn: boolean;
    flexible: boolean;
}, {}>;
export default _default;

import { ExtractPropTypes, PropType } from 'vue';
import { TableColumnCtx } from 'element-plus';

import elTableProps from 'element-plus/es/components/table/src/table/defaults';

export type DataItem = Record<string, any>;

export interface ITableItemProp extends Partial<TableColumnCtx<DataItem>> {
    // alwaysDisplay?: boolean;
    [key: string]: any;
}

export type TableItems = ITableItemProp[];

export const props = {
    ...elTableProps,
    columns: {
        type: Array as PropType<TableItems>,
        default: () => [],
    },
    // priority < ITableItemProp
    showOverflowTooltip: {
        type: Boolean,
        default: false,
    },
    storeUniqueKey: {
        type: String,
    },
    // priority < ITableItemProp
    sortable: {
        type: Boolean,
        default: false,
    },
    // 默认显示多少列
    defaultShowCount: {
        type: Number,
        default: 6,
    },
    showSerialNumber: {
        type: Boolean,
        default: true,
    },
};

export interface TableConfig {
    border: boolean;
    showOverflowTooltip: boolean;
    columns: TableItems;
    size: 'large' | 'small' | 'default';
    stripe: boolean;
    highlightCurrentRow: boolean;
}

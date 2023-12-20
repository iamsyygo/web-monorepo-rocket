import { ExtractPropTypes, PropType } from 'vue';
import Table from '@/table';
import Form, { FormProps, Span } from '@/form';
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
    /* 是否立即查询 */
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
export const props = {
    tableProps: {
        type: Object as PropType<BasicsPageTableProps>,
        default: () => ({}),
    },
    searchProps: {
        type: Object as PropType<BasicsPageFormProps>,
        default: () => ({}),
    },
    paginationProps: {
        type: Object as PropType<PaginationProps>,
        default: () => ({}),
    },
    getTableData: {
        type: Function as PropType<GetTableData>,
        required: true,
        default: () => Promise.resolve({ data: [], total: 0 }),
    },
};

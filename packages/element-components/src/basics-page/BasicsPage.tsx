import BasicsForm, { FormItemTypeProps } from '@/form';
import BasicsTable from '@/table';
import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { props } from './porps';
import styles from './basics-page.module.scss';
import { ElButton, ElIcon, ElPagination, dayjs, vLoading } from 'element-plus';
import { Refresh } from '@element-plus/icons-vue';

const getScopeSlot = (name: string, affix: string = '', slots: any, model) => {
    const slts = name.split(',');
    return slts.reduce((acc, cur) => {
        const slotName = affix + cur;
        if (slots[slotName]) {
            acc[name] = (props) => slots[slotName]({ model, props });
        }
        return acc;
    }, {});
};

export default defineComponent({
    props,
    directives: { loading: vLoading },
    setup(props, { slots, attrs, emit, expose }) {
        const store = reactive({
            searchValues: {},
            tableData: [] as any[],
            total: 100,
            pageNo: 1,
            pageSize: 10,
            updateTime: '',
            loading: false,
        });
        const hasQuery = props.searchProps && !!props.searchProps?.formItems.length;
        const formItems: FormItemTypeProps[] = [].slice.call(props.searchProps?.formItems || []);

        watch(
            () => store.searchValues,
            () => {
                // 立即查询
                if (props.searchProps?.immediately) {
                    getData();
                }
            },
        );
        onMounted(() => getData());

        const getData = () => {
            const dto = {
                ...store.searchValues,
                pageNo: store.pageNo,
                pageSize: store.pageSize,
            };
            store.loading = true;
            props
                .getTableData(dto)
                ?.then((res) => {
                    store.tableData = res.data;
                    store.total = res.total;
                    store.updateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
                })
                .finally(() => {
                    store.loading = false;
                });
        };
        const handleReset = () => {
            const initModel = props.searchProps.formItems.reduce((model, item) => {
                if (item.prop) {
                    model[item.prop] = item.defaultValue;
                }
                return model;
            }, {});
            Object.assign(store, {
                searchValues: initModel,
                pageNo: 1,
            });
            getData();
        };

        let searchFormAppendRender: (() => JSX.Element) | null = null;
        if (hasQuery) {
            formItems.push({
                type: 'custom',
                prop: 'search-form-append',
                labelWidth: '0px',
                label: '',
            });
            searchFormAppendRender = () => {
                return (
                    <div class="app-basics-page--search-append">
                        <ElButton autoInsertSpace size="default" type="primary" onClick={getData}>
                            查询
                        </ElButton>
                        <ElButton autoInsertSpace size="default" type="info" onClick={handleReset}>
                            重置
                        </ElButton>
                        {slots['search-form-append']?.(store.searchValues)}
                    </div>
                );
            };
        }

        const formProps = computed(() => {
            return Object.assign({}, props.searchProps, {
                formItems,
                inline: true,
                spans: props.searchProps.spans || { lg: 6, md: 8, sm: 12, xs: 24 },
            });
        });

        const formSlots = computed(() => {
            return props.searchProps?.formItems.reduce(
                (acc, cur) => {
                    if (cur.prop) {
                        return {
                            ...acc,
                            ...getScopeSlot(cur.prop, 'search-', slots, store.searchValues),
                        };
                    }
                    return acc;
                },
                { 'search-form-append': searchFormAppendRender },
            );
        });

        const handleSizeChange = (size: number) => {
            store.pageSize = size;
            getData();
        };
        const handleCurrentChange = (size: number) => {
            store.pageNo = size;
            getData();
        };

        return () => (
            <div class={styles['app-basics-page']}>
                {hasQuery ? (
                    <BasicsForm
                        class="app-basics-page--search"
                        v-model={store.searchValues}
                        formProps={formProps.value}
                        v-slots={formSlots.value}
                    ></BasicsForm>
                ) : null}
                <BasicsTable
                    v-loading={store.loading}
                    element-loading-background="rgb(255, 255, 255,0.95)"
                    class="app-basics-page--table"
                    {...props.tableProps}
                    data={store.tableData}
                    stripe
                    highlightCurrentRow
                />
                <div class="app-basics-page--pagination">
                    <div class="app-basics-page--pagination-updatetime hidden-sm-and-down">
                        上次更新时间：{store.updateTime}
                    </div>
                    {/* <ElIcon color="var(--el-text-color-regular)" class="app-basics-page--pagination-refresh">
                        <Refresh />
                    </ElIcon> */}
                    <ElPagination
                        layout="total, sizes, prev, pager, next, jumper"
                        v-model:current-page={store.pageNo}
                        v-model:page-size={store.pageSize}
                        onCurrent-change={handleCurrentChange}
                        onSize-change={handleSizeChange}
                        total={store.total}
                        pager-count={5}
                        background
                        small
                        {...props.paginationProps}
                    />
                </div>
            </div>
        );
    },
});

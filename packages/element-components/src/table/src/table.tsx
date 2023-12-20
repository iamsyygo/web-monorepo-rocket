import { computed, defineComponent, reactive, ref, toRef, unref, h } from 'vue';
// import TableConfigComponent from './TableCfg.vue';
import { ElTable, ElTableColumn, ElEmpty, ElPopover, ElIcon, ElTag } from 'element-plus';
import { props, TableItems, TableConfig } from './props';
import moduleCss from './index.module.scss';

export default defineComponent({
    props,
    setup(props, { slots, attrs, emit, expose }) {
        const columns = computed<TableItems>(() => {
            // is cache columns

            const c = props.columns.slice(0, props.defaultShowCount);
            if (props.showSerialNumber && c.length > 0) {
                c.unshift({
                    label: '序号',
                    type: 'index',
                    prop: 'index',
                    width: 60,
                    align: 'center',
                    fixed: 'left',
                });
            }
            return c;
        });
        const indexSlot = ({ $index }) => (
            <ElTag type="info" size="small" style={{ minWidth: '24px', border: 'none' }}>
                {$index + 1}
            </ElTag>
        );

        // @ts-expect-error
        slots.index ??= indexSlot as any;

        const tableConfig = computed<TableConfig>(() => {
            return {
                columns: [],
                size: props.size || 'small',
                stripe: props.stripe ?? true,
                border: props.border,
                showOverflowTooltip: props.showOverflowTooltip,
                highlightCurrentRow: props.highlightCurrentRow ?? true,
            };
        });
        // 序号 or 多选
        // const restColumns = Allcolumns.value.filter((item) => item.type);

        // hadnle table config
        // if (props.stateUniqueKey) {
        //     const _tableConfig = localStorage.getItem(props.stateUniqueKey);
        //     let _columns = [];
        //     if (_tableConfig) {
        //         // has cache use cache
        //         const config = JSON.parse(_tableConfig);
        //         Object.assign(tableConfig, config);
        //         _columns = tableConfig.columns.filter((item: any) => item.show);
        //     } else {
        //         // no cache reload columns
        //         _columns = Allcolumns.value.slice(0, props.defaultShowColumn);
        //         tableConfig.columns = Allcolumns.value.map((item, i) => {
        //             const show = i < props.defaultShowColumn;
        //             item.show = show;
        //             return item;
        //         });
        //     }
        //     columns.value = /*  restColumns.concat(_columns); */ _columns;
        // } else {
        //     // no cache key use default
        //     columns.value = Allcolumns.value;
        //     tableConfig.columns = Allcolumns.value;
        // }

        // const handleConfigSubmit = (data: TableConfig) => {
        //     const _columns = data.columns;
        //     Object.assign(tableConfig, data);
        //     if (props.stateUniqueKey) {
        //         // columns.value = restColumns.concat(
        //         //   _columns.filter((item) => item.show),
        //         // );
        //         columns.value = _columns.filter((item) => item.show);
        //         localStorage.setItem(props.stateUniqueKey, JSON.stringify(tableConfig));
        //         return;
        //     }
        //     columns.value = _columns;
        // };

        // const handleConfigReset = () => {
        //     console.log(popoverRef);

        //     unref(popoverRef).hide?.();
        //     props.stateUniqueKey && localStorage.removeItem(props.stateUniqueKey);
        //     columns.value = Allcolumns.value.slice(0, props.defaultShowColumn);
        //     tableConfig.columns = Allcolumns.value.map((item, i) => {
        //         const show = i < props.defaultShowColumn;
        //         item.show = show;
        //         return item;
        //     });
        //     tableConfig.border = props.border;
        //     tableConfig.showOverflowTooltip = props.showOverflowTooltip;
        //     tableConfig.size = props.size || 'default';
        //     tableConfig.stripe = props.stripe;
        //     tableConfig.highlightCurrentRow = props.highlightCurrentRow;
        // };

        enum Size {
            default = 14,
            large = 14,
            small = 12,
        }
        const ElColumnRender = columns.value.map((item) => {
            const slot = {
                default: item.prop && slots[item.prop],
                header: slots[item.prop + '-header'] || slots.header,
            };
            const minWidth = item.minWidth || (item.label && item.label.length * Size[tableConfig.value.size] + 50);

            const attrs = Object.assign({}, item, {
                showOverflowTooltip: item.showOverflowTooltip ?? tableConfig.value.showOverflowTooltip,
                minWidth: item.minWidth ?? minWidth,
            });

            return (
                <ElTableColumn key={item.prop} {...attrs}>
                    {slot}
                </ElTableColumn>
            );
        });

        const ElTableSlots = {
            empty: slots.empty || (() => <ElEmpty description="暂无数据" />),
            append: slots.append,
        };

        return () => {
            return (
                <div>
                    <ElTable
                        {...props}
                        v-slots={ElTableSlots}
                        border={tableConfig.value.border}
                        size={tableConfig.value.size}
                        stripe={tableConfig.value.stripe}
                        highlightCurrentRow={tableConfig.value.highlightCurrentRow}
                    >
                        {ElColumnRender}
                    </ElTable>

                    {/* <ElPopover
                        v-if={props.stateUniqueKey}
                        placement="right"
                        ref={popoverRef}
                        width={300}
                        trigger="click"
                        transition="config-popover"
                    >
                        {{
                            reference: () => (
                                <div class="table-pro-config-button">
                                    <ElIcon size={18}>
                                        <SwitchFilled />
                                    </ElIcon>
                                </div>
                            ),
                            default: () => {
                                return (
                                    <>
                                        <h3>
                                            表格配置
                                            <span style="font-size: 12px; color: #999; margin-left: 5px;">
                                                （可拖拽排序）
                                            </span>
                                        </h3>
                                        <TableConfigComponent
                                            tableConfig={tableConfig}
                                            stateUniqueKey={props.stateUniqueKey}
                                            onSubmit={handleConfigSubmit}
                                            onReset={handleConfigReset}
                                        />
                                    </>
                                );
                            },
                        }}
                    </ElPopover> */}
                </div>
            );
        };
    },
});

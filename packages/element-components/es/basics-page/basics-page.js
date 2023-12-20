import { w as withInstall } from "../vendor.js";
import { defineComponent, reactive, watch, onMounted, computed, createVNode, withDirectives, mergeProps, resolveDirective, createTextVNode } from "vue";
import { A as AoeForm } from "../form/form.js";
import { A as AoeTable } from "../table/table.js";
import { vLoading, dayjs, ElPagination, ElButton } from "element-plus";
const props = {
  tableProps: {
    type: Object,
    default: () => ({})
  },
  searchProps: {
    type: Object,
    default: () => ({})
  },
  paginationProps: {
    type: Object,
    default: () => ({})
  },
  getTableData: {
    type: Function,
    required: true,
    default: () => Promise.resolve({ data: [], total: 0 })
  }
};
const styles = {
  "app-basics-page": "_app-basics-page_qwtzl_2"
};
const getScopeSlot = (name, affix = "", slots, model) => {
  const slts = name.split(",");
  return slts.reduce((acc, cur) => {
    const slotName = affix + cur;
    if (slots[slotName]) {
      acc[name] = (props2) => slots[slotName]({
        model,
        props: props2
      });
    }
    return acc;
  }, {});
};
const BasicsPage = /* @__PURE__ */ defineComponent({
  props,
  directives: {
    loading: vLoading
  },
  setup(props2, {
    slots,
    attrs,
    emit,
    expose
  }) {
    var _a, _b;
    const store = reactive({
      searchValues: {},
      tableData: [],
      total: 100,
      pageNo: 1,
      pageSize: 10,
      updateTime: "",
      loading: false
    });
    const hasQuery = props2.searchProps && !!((_a = props2.searchProps) == null ? void 0 : _a.formItems.length);
    const formItems = [].slice.call(((_b = props2.searchProps) == null ? void 0 : _b.formItems) || []);
    watch(() => store.searchValues, () => {
      var _a2;
      if ((_a2 = props2.searchProps) == null ? void 0 : _a2.immediately) {
        getData();
      }
    });
    onMounted(() => getData());
    const getData = () => {
      var _a2;
      const dto = {
        ...store.searchValues,
        pageNo: store.pageNo,
        pageSize: store.pageSize
      };
      store.loading = true;
      (_a2 = props2.getTableData(dto)) == null ? void 0 : _a2.then((res) => {
        store.tableData = res.data;
        store.total = res.total;
        store.updateTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
      }).finally(() => {
        store.loading = false;
      });
    };
    const handleReset = () => {
      const initModel = props2.searchProps.formItems.reduce((model, item) => {
        if (item.prop) {
          model[item.prop] = item.defaultValue;
        }
        return model;
      }, {});
      Object.assign(store, {
        searchValues: initModel,
        pageNo: 1
      });
      getData();
    };
    let searchFormAppendRender = null;
    if (hasQuery) {
      formItems.push({
        type: "custom",
        prop: "search-form-append",
        labelWidth: "0px",
        label: ""
      });
      searchFormAppendRender = () => {
        var _a2;
        return createVNode("div", {
          "class": "app-basics-page--search-append"
        }, [createVNode(ElButton, {
          "autoInsertSpace": true,
          "size": "default",
          "type": "primary",
          "onClick": getData
        }, {
          default: () => [createTextVNode("查询")]
        }), createVNode(ElButton, {
          "autoInsertSpace": true,
          "size": "default",
          "type": "info",
          "onClick": handleReset
        }, {
          default: () => [createTextVNode("重置")]
        }), (_a2 = slots["search-form-append"]) == null ? void 0 : _a2.call(slots, store.searchValues)]);
      };
    }
    const formProps = computed(() => {
      return Object.assign({}, props2.searchProps, {
        formItems,
        inline: true,
        spans: props2.searchProps.spans || {
          lg: 6,
          md: 8,
          sm: 12,
          xs: 24
        }
      });
    });
    const formSlots = computed(() => {
      var _a2;
      return (_a2 = props2.searchProps) == null ? void 0 : _a2.formItems.reduce((acc, cur) => {
        if (cur.prop) {
          return {
            ...acc,
            ...getScopeSlot(cur.prop, "search-", slots, store.searchValues)
          };
        }
        return acc;
      }, {
        "search-form-append": searchFormAppendRender
      });
    });
    const handleSizeChange = (size) => {
      store.pageSize = size;
      getData();
    };
    const handleCurrentChange = (size) => {
      store.pageNo = size;
      getData();
    };
    return () => createVNode("div", {
      "class": styles["app-basics-page"]
    }, [hasQuery ? createVNode(AoeForm, {
      "class": "app-basics-page--search",
      "modelValue": store.searchValues,
      "onUpdate:modelValue": ($event) => store.searchValues = $event,
      "formProps": formProps.value
    }, formSlots.value) : null, withDirectives(createVNode(AoeTable, mergeProps({
      "element-loading-background": "rgb(255, 255, 255,0.95)",
      "class": "app-basics-page--table"
    }, props2.tableProps, {
      "data": store.tableData,
      "stripe": true,
      "highlightCurrentRow": true
    }), null), [[resolveDirective("loading"), store.loading]]), createVNode("div", {
      "class": "app-basics-page--pagination"
    }, [createVNode("div", {
      "class": "app-basics-page--pagination-updatetime hidden-sm-and-down"
    }, [createTextVNode("上次更新时间："), store.updateTime]), createVNode(ElPagination, mergeProps({
      "layout": "total, sizes, prev, pager, next, jumper",
      "current-page": store.pageNo,
      "onUpdate:current-page": ($event) => store.pageNo = $event,
      "page-size": store.pageSize,
      "onUpdate:page-size": ($event) => store.pageSize = $event,
      "onCurrent-change": handleCurrentChange,
      "onSize-change": handleSizeChange,
      "total": store.total,
      "pager-count": 5,
      "background": true,
      "small": true
    }, props2.paginationProps), null)])]);
  }
});
const AoeBasicsPage = withInstall(BasicsPage);
export {
  AoeBasicsPage as A
};

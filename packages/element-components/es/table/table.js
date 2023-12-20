import { w as withInstall } from "../vendor.js";
import { defineComponent, computed, createVNode, mergeProps, isVNode } from "vue";
import { ElTableColumn, ElEmpty, ElTable, ElTag } from "element-plus";
import elTableProps from "element-plus/es/components/table/src/table/defaults";
const props = {
  ...elTableProps,
  columns: {
    type: Array,
    default: () => []
  },
  // priority < ITableItemProp
  showOverflowTooltip: {
    type: Boolean,
    default: false
  },
  storeUniqueKey: {
    type: String
  },
  // priority < ITableItemProp
  sortable: {
    type: Boolean,
    default: false
  },
  // 默认显示多少列
  defaultShowCount: {
    type: Number,
    default: 6
  },
  showSerialNumber: {
    type: Boolean,
    default: true
  }
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const Table = /* @__PURE__ */ defineComponent({
  props,
  setup(props2, {
    slots,
    attrs,
    emit,
    expose
  }) {
    const columns = computed(() => {
      const c = props2.columns.slice(0, props2.defaultShowCount);
      if (props2.showSerialNumber && c.length > 0) {
        c.unshift({
          label: "序号",
          type: "index",
          prop: "index",
          width: 60,
          align: "center",
          fixed: "left"
        });
      }
      return c;
    });
    const indexSlot = ({
      $index
    }) => createVNode(ElTag, {
      "type": "info",
      "size": "small",
      "style": {
        minWidth: "24px",
        border: "none"
      }
    }, {
      default: () => [$index + 1]
    });
    slots.index ?? (slots.index = indexSlot);
    const tableConfig = computed(() => {
      return {
        columns: [],
        size: props2.size || "small",
        stripe: props2.stripe ?? true,
        border: props2.border,
        showOverflowTooltip: props2.showOverflowTooltip,
        highlightCurrentRow: props2.highlightCurrentRow ?? true
      };
    });
    let Size = /* @__PURE__ */ function(Size2) {
      Size2[Size2["default"] = 14] = "default";
      Size2[Size2["large"] = 14] = "large";
      Size2[Size2["small"] = 12] = "small";
      return Size2;
    }({});
    const ElColumnRender = columns.value.map((item) => {
      const slot = {
        default: item.prop && slots[item.prop],
        header: slots[item.prop + "-header"] || slots.header
      };
      const minWidth = item.minWidth || item.label && item.label.length * Size[tableConfig.value.size] + 50;
      const attrs2 = Object.assign({}, item, {
        showOverflowTooltip: item.showOverflowTooltip ?? tableConfig.value.showOverflowTooltip,
        minWidth: item.minWidth ?? minWidth
      });
      return createVNode(ElTableColumn, mergeProps({
        "key": item.prop
      }, attrs2), _isSlot(slot) ? slot : {
        default: () => [slot]
      });
    });
    const ElTableSlots = {
      empty: slots.empty || (() => createVNode(ElEmpty, {
        "description": "暂无数据"
      }, null)),
      append: slots.append
    };
    return () => {
      return createVNode("div", null, [createVNode(ElTable, mergeProps(props2, {
        "border": tableConfig.value.border,
        "size": tableConfig.value.size,
        "stripe": tableConfig.value.stripe,
        "highlightCurrentRow": tableConfig.value.highlightCurrentRow
      }), {
        default: () => [ElColumnRender],
        ...ElTableSlots
      })]);
    };
  }
});
const AoeTable = withInstall(Table);
export {
  AoeTable as A,
  props as p
};

import { _ as _export_sfc, w as withInstall } from "../vendor.js";
import { defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, normalizeStyle, unref, createCommentVNode, renderSlot } from "vue";
const _hoisted_1 = { class: "el-tree-line-wrap" };
const clearance = 6;
const expandWidth = 24;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    node: {},
    indent: { default: 18 },
    showCheckbox: { type: Boolean, default: false }
  },
  setup(__props) {
    const checkboxWidth = __props.showCheckbox ? 16 : -clearance;
    const verticalStyle = computed(() => {
      const lastNode = __props.node.parent.childNodes[__props.node.parent.childNodes.length - 1];
      const distance = expandWidth + checkboxWidth + __props.indent - clearance;
      return {
        transform: `translateX(-${distance}px)`,
        height: __props.node === lastNode ? "50%" : "100%"
      };
    });
    const horizontalStyle = computed(() => {
      const distance = expandWidth + checkboxWidth + __props.indent - clearance;
      const leafWidth = !__props.node.isLeaf ? expandWidth : expandWidth / 2;
      return {
        transform: `translateX(-${distance}px)`,
        width: `${distance - checkboxWidth - leafWidth}px`
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.node.level > 2 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.node.level - 2, (num) => {
          return openBlock(), createElementBlock("span", {
            class: "el-tree-line--vertical",
            key: num,
            style: normalizeStyle({
              transform: `translateX(-${(_ctx.node.level - num) * _ctx.indent + unref(checkboxWidth) + expandWidth - clearance}px)`
            })
          }, null, 4);
        }), 128)) : createCommentVNode("", true),
        _ctx.node.parent.parent ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "el-tree-line--vertical",
          style: normalizeStyle(verticalStyle.value)
        }, null, 4)) : createCommentVNode("", true),
        _ctx.node.parent.parent ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: "el-tree-line--hzorizontal",
          style: normalizeStyle(horizontalStyle.value)
        }, null, 4)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f709bb20_lang = "";
const TreeLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f709bb20"]]);
const AoeTreeLine = withInstall(TreeLine);
export {
  AoeTreeLine as A
};
//# sourceMappingURL=tree-line.js.map

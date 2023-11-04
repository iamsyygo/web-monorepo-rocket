import { _ as _export_sfc, w as withInstall } from "../vendor.js";
import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = {
  class: "symbol-icon",
  "aria-hidden": "true"
};
const _hoisted_2 = ["xlink:href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1, [
        createElementVNode("use", {
          "xlink:href": `#${props.name}`
        }, null, 8, _hoisted_2)
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_43f0b938_lang = "";
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43f0b938"]]);
const AoeSymbolIcon = withInstall(Icon);
export {
  AoeSymbolIcon as A
};

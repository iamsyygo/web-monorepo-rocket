import { E as ElHeader, a as ElContainer, b as ElAside, c as ElMain, _ as _export_sfc, w as withInstall } from "../vendor.js";
import { defineComponent, useCssVars, watch, openBlock, createElementBlock, normalizeClass, createVNode, unref, normalizeStyle, withCtx, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    layout: { default: () => ({ headerHeight: 60, asideWidth: 200, typography: "ham" }) }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "72d4bc1c": _ctx.layout.headerHeight,
      "13f97acc": _ctx.layout.asideWidth
    }));
    watch(
      () => __props.layout,
      (val) => {
        localStorage.setItem("layout-option", JSON.stringify(val));
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`system-base-architecture--${_ctx.layout.typography}`)
      }, [
        createVNode(unref(ElHeader), {
          class: "el-header--custom",
          style: normalizeStyle(_ctx.headerStyle)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "header", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["style"]),
        createVNode(unref(ElContainer), null, {
          default: withCtx(() => [
            createVNode(unref(ElAside), { class: "el-aside--custom" }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "aside", {}, void 0, true)
              ]),
              _: 3
            }),
            createVNode(unref(ElMain), { class: "el-main--custom" }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "main", {}, void 0, true)
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_0b80f4a9_lang = "";
const BaseArchitecture = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b80f4a9"]]);
const AoeBaseArchitecture = withInstall(BaseArchitecture);
export {
  AoeBaseArchitecture as A
};

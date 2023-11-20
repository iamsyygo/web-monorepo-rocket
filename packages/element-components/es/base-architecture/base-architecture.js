import { _ as _export_sfc, w as withInstall } from "../vendor.js";
import { defineComponent, useCssVars, openBlock, createBlock, Transition, withCtx, createElementVNode, normalizeClass, createVNode, unref, normalizeStyle, renderSlot } from "vue";
import { ElHeader, ElContainer, ElAside, ElMain } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    option: { default: () => ({ headerHeight: 60, asideWidth: 200, typography: "ham" }) }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "044b92ea": _ctx.option.headerHeight,
      "15e749c4": _ctx.option.asideWidth
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "app",
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(`system-app-architecture--${_ctx.option.typography}`)
          }, [
            createVNode(unref(ElHeader), {
              class: "el-header--custom",
              style: normalizeStyle({ ..._ctx.option.headerStyle, height: _ctx.option.headerHeight })
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "header", {}, void 0, true)
              ]),
              _: 3
            }, 8, ["style"]),
            createVNode(unref(ElContainer), null, {
              default: withCtx(() => [
                createVNode(unref(ElAside), {
                  class: "el-aside--custom",
                  style: normalizeStyle({ ..._ctx.option.asideStyle, width: _ctx.option.asideWidth })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "aside", {}, void 0, true)
                  ]),
                  _: 3
                }, 8, ["style"]),
                createVNode(unref(ElMain), { class: "el-main--custom" }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "main", {}, void 0, true)
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ], 2)
        ]),
        _: 3
      });
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_cc763d96_lang = "";
const BaseArchitecture = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc763d96"]]);
const AoeBaseArchitecture = withInstall(BaseArchitecture);
export {
  AoeBaseArchitecture as A
};

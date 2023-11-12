import { _ as _export_sfc, y as ElSubMenu, u as ElIcon, z as ElMenuItem, A as ElMenu, B as ElConfigProvider, C as zhCn, w as withInstall } from "../vendor.js";
import { openBlock, createElementBlock, defineComponent, useCssVars, ref, computed, shallowRef, watch, resolveComponent, createVNode, unref, createElementVNode, withCtx, Transition, createBlock, KeepAlive, resolveDynamicComponent, Fragment, renderList, toDisplayString, mergeProps } from "vue";
import { A as AoeBaseArchitecture } from "../base-architecture/base-architecture.js";
import { A as AoeTabPanel } from "../tab-panel/tab-panel.js";
import { A as AoeSymbolIcon } from "../symbol-icon/symbol-icon.js";
const _sfc_main$5 = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div");
}
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render]]);
const _hoisted_1 = { class: "base-main--wrapper" };
const _hoisted_2 = { class: "main-content--box" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  props: {
    route: {},
    backgroundColor: { default: "#fff" }
  },
  emits: ["click-tab", "remove-tab"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "340aaefa": _ctx.backgroundColor
    }));
    const emits = __emit;
    const handleTabClick = (e, tab, index) => {
      emits("click-tab", e, tab, index);
    };
    const tabs = ref([]);
    const activeTabIndex = ref("");
    const include = computed(() => {
      return tabs.value.map((tab) => tab.name);
    });
    activeTabIndex.value = __props.route.path;
    tabs.value.push({
      label: __props.route.meta.title || "",
      key: __props.route.path,
      icon: __props.route.meta.icon || "",
      name: __props.route.name
    });
    const tabPanelRef = shallowRef();
    watch(
      () => __props.route.path,
      (path) => {
        var _a;
        (_a = tabPanelRef.value) == null ? void 0 : _a.addTab({
          label: __props.route.meta.title || "",
          key: path,
          icon: __props.route.meta.icon || "",
          name: __props.route.name
        });
        activeTabIndex.value = path;
      }
    );
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(AoeTabPanel), {
          ref_key: "tabPanelRef",
          ref: tabPanelRef,
          class: "main-tabs--box",
          tabs: tabs.value,
          onClick: handleTabClick,
          onRemove: _cache[0] || (_cache[0] = ($event) => emits("remove-tab", activeTabIndex.value, $event.tab, $event.index)),
          modelValue: activeTabIndex.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeTabIndex.value = $event),
          "insert-to-after": ""
        }, null, 8, ["tabs", "modelValue"]),
        createElementVNode("div", _hoisted_2, [
          createVNode(_component_router_view, null, {
            default: withCtx(({ Component, route }) => [
              createVNode(Transition, {
                mode: "out-in",
                name: "base-view--transition"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(KeepAlive, {
                    max: 10,
                    include: include.value
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(Component), {
                      key: route.fullPath
                    }))
                  ], 1032, ["include"]))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const Main_vue_vue_type_style_index_0_scoped_4a39472a_lang = "";
const Main = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4a39472a"]]);
const iconSize = 18;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "MenuContent"
  },
  __name: "MenuContent",
  props: {
    menus: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_MenuContent = resolveComponent("MenuContent", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menus, (menu) => {
        var _a;
        return openBlock(), createElementBlock(Fragment, {
          key: menu.path
        }, [
          ((_a = menu.children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(unref(ElSubMenu), {
            key: 0,
            index: menu.path
          }, {
            title: withCtx(() => [
              createVNode(unref(ElIcon), { size: iconSize }, {
                default: withCtx(() => [
                  createVNode(unref(AoeSymbolIcon), {
                    name: menu.icon
                  }, null, 8, ["name"])
                ]),
                _: 2
              }, 1024),
              createElementVNode("span", null, toDisplayString(menu.name), 1)
            ]),
            default: withCtx(() => [
              createVNode(_component_MenuContent, {
                menus: menu.children
              }, null, 8, ["menus"])
            ]),
            _: 2
          }, 1032, ["index"])) : (openBlock(), createBlock(unref(ElMenuItem), {
            key: 1,
            index: menu.path,
            disabled: menu.disabled
          }, {
            title: withCtx(() => [
              createElementVNode("span", null, toDisplayString(menu.name), 1)
            ]),
            default: withCtx(() => [
              createVNode(unref(ElIcon), { size: iconSize }, {
                default: withCtx(() => [
                  createVNode(unref(AoeSymbolIcon), {
                    name: menu.icon
                  }, null, 8, ["name"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["index", "disabled"]))
        ], 64);
      }), 128);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  props: {
    menus: { default: () => [] },
    defaultMenuPathActive: {},
    collapse: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElMenu), mergeProps({
        "default-active": _ctx.defaultMenuPathActive,
        collapse: _ctx.collapse,
        class: "base-menu--content",
        router: ""
      }, _ctx.$attrs), {
        default: withCtx(() => [
          createVNode(_sfc_main$3, { menus: _ctx.menus }, null, 8, ["menus"])
        ]),
        _: 1
      }, 16, ["default-active", "collapse"]);
    };
  }
});
const Menu_vue_vue_type_style_index_0_lang = "";
const miniMenuWidth = 64;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    asideWidth: { default: 200 },
    menus: { default: () => [] },
    activeMenuKey: {}
  },
  emits: ["collapse"],
  setup(__props, { emit: __emit }) {
    __props.asideWidth - miniMenuWidth;
    const collapse = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        "aside-width": _ctx.asideWidth,
        menus: _ctx.menus,
        "default-menu-path-active": _ctx.activeMenuKey,
        collapse: collapse.value
      }, null, 8, ["aside-width", "menus", "default-menu-path-active", "collapse"]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_eea3286d_lang = "";
const Aside = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eea3286d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    menus: {},
    router: {}
  },
  setup(__props) {
    const route = computed(() => {
      return __props.router.currentRoute.value;
    });
    const option = ref({
      asideWidth: 200,
      headerHeight: 60,
      typography: "ham",
      headerStyle: {
        background: "linear-gradient(90deg, #102EFF 0%, #53A8FF 100%)",
        boxShadow: "0 1px 4px rgba(0, 21, 41, .08)"
      },
      asideStyle: {
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0, 21, 41, .08)"
      }
    });
    const handleMenuCollapse = (width) => {
      option.value.asideWidth = width;
    };
    const handleTabClick = (e, tab, index) => {
      __props.router.push(tab.key);
    };
    const handleTabRemove = (lastKey, tab, index) => {
      __props.router.push(lastKey);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElConfigProvider), {
        locale: unref(zhCn),
        size: "default"
      }, {
        default: withCtx(() => [
          createVNode(unref(AoeBaseArchitecture), { option: option.value }, {
            header: withCtx(() => [
              createVNode(Header)
            ]),
            aside: withCtx(() => [
              createVNode(Aside, {
                "aside-width": option.value.asideWidth,
                menus: _ctx.menus,
                activeMenuKey: route.value.path,
                onCollapse: handleMenuCollapse
              }, null, 8, ["aside-width", "menus", "activeMenuKey"])
            ]),
            main: withCtx(() => [
              createVNode(Main, {
                route: route.value,
                onClickTab: handleTabClick,
                onRemoveTab: handleTabRemove
              }, null, 8, ["route"])
            ]),
            _: 1
          }, 8, ["option"])
        ]),
        _: 1
      }, 8, ["locale"]);
    };
  }
});
const AoeMain = withInstall(_sfc_main);
export {
  AoeMain as A
};

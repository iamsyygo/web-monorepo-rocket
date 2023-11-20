import { _ as _export_sfc, h as handleElementTheme, z as zhCn, w as withInstall } from "../vendor.js";
import { openBlock, createElementBlock, createElementVNode, defineComponent, renderSlot, createVNode, unref, withCtx, useCssVars, ref, computed, shallowRef, watch, resolveComponent, Transition, createBlock, KeepAlive, resolveDynamicComponent, Fragment, renderList, toDisplayString, mergeProps, normalizeClass, pushScopeId, popScopeId, reactive, isRef, createCommentVNode, createTextVNode, onBeforeMount } from "vue";
import { ElIcon, ElSubMenu, ElMenuItem, ElMenu, ElRow, ElCol, ElButton, ElConfigProvider, ElDrawer } from "element-plus";
import { A as AoeBaseArchitecture } from "../base-architecture/base-architecture.js";
import { A as AoeTabPanel } from "../tab-panel/tab-panel.js";
import { A as AoeSymbolIcon } from "../symbol-icon/symbol-icon.js";
import { A as AoeForm } from "../form/form.js";
import { u as useDefineModel } from "../hooks/hooks.js";
const _sfc_main$8 = {};
const _hoisted_1$5 = {
  t: "1699968030909",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "37542",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "200",
  height: "200"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M595.09 756.894h206.636c120.692 0 220.294-96.292 222.21-216.968 0.044-2.778 0.066-5.56 0.066-8.348-0.04-282.352-231.044-512.68-513.394-511.928C228.478 20.4 0 249.342 0 531.648c0 198.418 112.872 370.456 277.91 455.438 103.272 53.178 226.166-23.018 226.166-139.178 0-50.266 40.748-91.014 91.014-91.014z",
  fill: "#FFC751",
  "p-id": "37543"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M77.136 681.726c24.634-7.606 38.964-32.892 33.224-58.026A413.286 413.286 0 0 1 100 531.64c0-109.84 42.72-213.18 120.3-290.96 60.142-60.282 135.67-99.654 217.748-114.44 23.864-4.298 41.286-24.958 41.286-49.206 0-31.27-28.364-54.718-59.132-49.148C181.246 71.148 0 280.214 0 531.64c0 39.524 4.486 77.998 12.966 114.946 6.376 27.774 34.996 44.172 62.218 35.742l1.952-0.602z",
  fill: "#FFE059",
  "p-id": "37544"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M96.398 352.788c21.844 6.064 45.134-3.302 56.268-23.05 18.162-32.216 40.812-62.166 67.634-89.056 37.532-37.62 81.062-67.088 128.432-87.524 24.892-10.738 36.658-39.372 26.272-64.412l-0.384-0.928c-10.604-25.56-40.072-37.334-65.476-26.36-103.226 44.59-188.86 122.17-243.62 219.454-15.66 27.82-0.898 63.08 29.868 71.6 0.336 0.09 0.672 0.182 1.006 0.276z",
  fill: "#FFF370",
  "p-id": "37545"
}, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M253.78 89.508a512.34 512.34 0 0 0-42.324 27.672c-25.176 18.296-26.69 55.198-3.312 75.744l1.936 1.708c16.954 15.018 42.236 16.324 60.566 3.024a409.924 409.924 0 0 1 33.27-21.766c22.252-13.06 30.65-40.95 19.048-63.996l-1.092-2.174c-12.628-25.17-43.788-34.44-68.092-20.212z",
  fill: "#FFF7C7",
  "p-id": "37546"
}, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M1024 531.58c0 2.78-0.02 5.56-0.06 8.34-1.92 120.68-101.52 216.98-222.22 216.98H595.08c-25.12 0-47.88 10.18-64.34 26.66-16.48 16.46-26.66 39.2-26.66 64.34 0 116.16-122.9 192.36-226.16 139.18-71.88-37-133.88-90.54-180.96-155.58 5.72 0.18 11.44 0.26 17.2 0.26 308.4 0 558.4-250.02 558.4-558.42 0-87-19.9-169.36-55.4-242.78C848.82 79.32 1023.96 285.72 1024 531.58z",
  fill: "#FFAF40",
  "p-id": "37547"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M283.324 738.028m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#FFAF40",
  "p-id": "37548"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M239.084 477.066m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#FFAF40",
  "p-id": "37549"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createElementVNode("path", {
  d: "M405.176 269.166m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#FFAF40",
  "p-id": "37550"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createElementVNode("path", {
  d: "M674.08 252.722m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#FFAF40",
  "p-id": "37551"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createElementVNode("path", {
  d: "M859.234 448.296m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#FF993A",
  "p-id": "37552"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createElementVNode("path", {
  d: "M1024 531.58c0 2.78-0.02 5.56-0.06 8.34-1.92 120.68-101.52 216.98-222.22 216.98h-41.28c83.2-84.16 134.56-199.84 134.56-327.54 0-149.12-70.04-281.86-179.02-367.16C896.86 141.32 1023.96 322.12 1024 531.58z",
  fill: "#FF993A",
  "p-id": "37553"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createElementVNode("path", {
  d: "M245.956 697.544m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#706C64",
  "p-id": "37554"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createElementVNode("path", {
  d: "M197.494 658.454m-39.09 0a39.09 39.09 0 1 0 78.18 0 39.09 39.09 0 1 0-78.18 0Z",
  fill: "#8F8B81",
  "p-id": "37555"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createElementVNode("path", {
  d: "M347.514 697.552c0 56.08-45.458 101.556-101.556 101.556s-101.576-45.476-101.576-101.556c0-3.856 0.212-7.672 0.636-11.432 4.722 35.452 35.086 62.808 71.81 62.808 40.02 0 72.446-32.444 72.446-72.446s-32.426-72.446-72.446-72.446c-4.55 0-9.002 0.424-13.322 1.234 12.916-5.976 27.298-9.292 42.45-9.292 56.1-0.002 101.558 45.474 101.558 101.574z",
  fill: "#595751",
  "p-id": "37556"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createElementVNode("path", {
  d: "M201.716 436.584m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#8F6BDD",
  "p-id": "37557"
}, null, -1);
const _hoisted_17 = /* @__PURE__ */ createElementVNode("path", {
  d: "M153.254 397.492m-39.09 0a39.09 39.09 0 1 0 78.18 0 39.09 39.09 0 1 0-78.18 0Z",
  fill: "#AB97F2",
  "p-id": "37558"
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createElementVNode("path", {
  d: "M303.274 436.59c0 56.08-45.458 101.556-101.556 101.556s-101.576-45.476-101.576-101.556c0-3.856 0.212-7.672 0.636-11.432 4.722 35.452 35.086 62.808 71.81 62.808 40.02 0 72.446-32.444 72.446-72.446s-32.426-72.446-72.446-72.446c-4.55 0-9.002 0.424-13.322 1.234 12.916-5.976 27.298-9.292 42.45-9.292 56.1-0.002 101.558 45.476 101.558 101.574z",
  fill: "#8042E0",
  "p-id": "37559"
}, null, -1);
const _hoisted_19 = /* @__PURE__ */ createElementVNode("path", {
  d: "M367.808 228.682m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#79FF79",
  "p-id": "37560"
}, null, -1);
const _hoisted_20 = /* @__PURE__ */ createElementVNode("path", {
  d: "M319.346 189.592m-39.09 0a39.09 39.09 0 1 0 78.18 0 39.09 39.09 0 1 0-78.18 0Z",
  fill: "#C2FFC2",
  "p-id": "37561"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createElementVNode("path", {
  d: "M469.366 228.688c0 56.08-45.458 101.556-101.556 101.556s-101.576-45.476-101.576-101.556c0-3.856 0.212-7.672 0.636-11.432 4.722 35.452 35.086 62.808 71.81 62.808 40.02 0 72.446-32.444 72.446-72.446S378.7 135.172 338.68 135.172c-4.55 0-9.002 0.424-13.322 1.234 12.916-5.976 27.298-9.292 42.45-9.292 56.102 0 101.558 45.476 101.558 101.574z",
  fill: "#29E088",
  "p-id": "37562"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createElementVNode("path", {
  d: "M636.712 212.24m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#48ACFF",
  "p-id": "37563"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createElementVNode("path", {
  d: "M588.25 173.148m-39.09 0a39.09 39.09 0 1 0 78.18 0 39.09 39.09 0 1 0-78.18 0Z",
  fill: "#7CBAF7",
  "p-id": "37564"
}, null, -1);
const _hoisted_24 = /* @__PURE__ */ createElementVNode("path", {
  d: "M738.27 212.246c0 56.08-45.458 101.556-101.556 101.556s-101.576-45.476-101.576-101.556c0-3.856 0.212-7.672 0.636-11.432 4.724 35.452 35.086 62.808 71.81 62.808 40.02 0 72.446-32.444 72.446-72.446s-32.426-72.446-72.446-72.446c-4.55 0-9.002 0.424-13.322 1.234 12.916-5.976 27.298-9.292 42.45-9.292 56.1-0.002 101.558 45.476 101.558 101.574z",
  fill: "#229BFF",
  "p-id": "37565"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createElementVNode("path", {
  d: "M821.866 407.812m-101.564 0a101.564 101.564 0 1 0 203.128 0 101.564 101.564 0 1 0-203.128 0Z",
  fill: "#FC709B",
  "p-id": "37566"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createElementVNode("path", {
  d: "M773.404 368.722m-39.09 0a39.09 39.09 0 1 0 78.18 0 39.09 39.09 0 1 0-78.18 0Z",
  fill: "#F7A6C1",
  "p-id": "37567"
}, null, -1);
const _hoisted_27 = /* @__PURE__ */ createElementVNode("path", {
  d: "M923.424 407.82c0 56.08-45.458 101.556-101.556 101.556s-101.576-45.476-101.576-101.556c0-3.856 0.212-7.672 0.636-11.432 4.722 35.452 35.086 62.808 71.81 62.808 40.02 0 72.446-32.444 72.446-72.446s-32.426-72.446-72.446-72.446c-4.55 0-9.002 0.424-13.322 1.234 12.916-5.976 27.298-9.292 42.45-9.292 56.1-0.002 101.558 45.476 101.558 101.574z",
  fill: "#FE255F",
  "p-id": "37568"
}, null, -1);
const _hoisted_28 = [
  _hoisted_2$5,
  _hoisted_3$4,
  _hoisted_4$2,
  _hoisted_5$2,
  _hoisted_6$1,
  _hoisted_7$1,
  _hoisted_8,
  _hoisted_9,
  _hoisted_10,
  _hoisted_11,
  _hoisted_12,
  _hoisted_13,
  _hoisted_14,
  _hoisted_15,
  _hoisted_16,
  _hoisted_17,
  _hoisted_18,
  _hoisted_19,
  _hoisted_20,
  _hoisted_21,
  _hoisted_22,
  _hoisted_23,
  _hoisted_24,
  _hoisted_25,
  _hoisted_26,
  _hoisted_27
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_28);
}
const PaletteSvg = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1]]);
const _sfc_main$7 = {};
const _hoisted_1$4 = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "37961",
  width: "200",
  height: "200"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M511.332 64c43.538 0 66.958 10.25 77.23 16.54 4.564 2.796 7.59 7.336 9.614 12.36 6.982 17.32 24.132 61.41 34.266 100.756 32.334 12.782 62.24 30.53 88.81 52.326 10.39-2.898 21.33-5.516 32.128-7.846l2.696-0.576c28.264-5.99 55.138-9.976 68.04-11.746 5.28-0.724 10.652-0.324 15.312 2.306 10.48 5.92 30.904 21.46 52.672 59.88 21.77 38.418 24.766 64.206 24.556 76.42-0.092 5.426-2.44 10.366-5.694 14.66-11.236 14.832-40.156 52.034-68.542 80.656A350.486 350.486 0 0 1 846.32 512c0 17.77-1.332 35.224-3.9 52.262 28.386 28.62 57.306 65.824 68.54 80.656 3.256 4.296 5.604 9.234 5.696 14.66 0.21 12.212-2.786 38.002-24.556 76.422-21.768 38.418-42.19 53.96-52.672 59.88-4.66 2.628-10.032 3.028-15.31 2.304-13.724-1.884-43.246-6.27-73.44-12.91l-2.704-0.6c-9.02-2.02-18.06-4.244-26.72-6.658-26.57 21.796-56.476 39.546-88.812 52.328-10.134 39.346-27.284 83.436-34.266 100.758-2.024 5.02-5.05 9.56-9.614 12.36-10.272 6.288-33.692 16.538-77.23 16.538-43.536 0-66.956-10.25-77.228-16.54-4.566-2.796-7.592-7.336-9.616-12.36-5.412-13.428-16.938-42.946-26.566-73.87l-0.832-2.692a553.944 553.944 0 0 1-6.866-24.194c-32.338-12.782-62.242-30.532-88.814-52.328-3.462 0.966-6.986 1.9-10.546 2.804l-2.676 0.672c-35.312 8.768-73.46 14.472-89.64 16.692-5.28 0.724-10.65 0.324-15.312-2.306-10.48-5.92-30.902-21.46-52.672-59.878-20.86-36.82-24.482-62.038-24.562-74.824v-0.816c0-0.266 0.004-0.526 0.008-0.78 0.092-5.428 2.44-10.366 5.694-14.662 11.236-14.832 40.156-52.034 68.54-80.656A350.458 350.458 0 0 1 176.346 512c0-17.77 1.334-35.226 3.9-52.264-28.384-28.62-57.304-65.824-68.54-80.656-3.256-4.294-5.602-9.234-5.694-14.66a66.43 66.43 0 0 1-0.008-0.782v-0.816c0.08-12.786 3.7-38.006 24.562-74.822 21.77-38.42 42.192-53.96 52.672-59.88 4.662-2.63 10.034-3.03 15.312-2.306 18.228 2.5 64.336 9.424 102.864 20.168 26.572-21.796 56.474-39.544 88.812-52.326a553.944 553.944 0 0 1 6.866-24.194l0.832-2.692c9.628-30.924 21.154-60.442 26.566-73.872 2.024-5.02 5.05-9.56 9.616-12.36C444.376 74.252 467.796 64 511.332 64z m0 277.334c-94.256 0-170.666 76.408-170.666 170.666s76.41 170.666 170.666 170.666C605.59 682.666 682 606.26 682 512s-76.41-170.666-170.668-170.666z",
  fill: "#515151",
  "p-id": "37962"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$3);
}
const ShezhiSvg = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render]]);
const _hoisted_1$3 = { class: "app-header--wrapper" };
const _hoisted_2$3 = { class: "app-header--left" };
const _hoisted_3$2 = { class: "app-header--center" };
const _hoisted_4$1 = { class: "app-header--right" };
const _hoisted_5$1 = { class: "system-header--btn" };
const iconSize$1 = 18;
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "index",
  emits: ["palette"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "left", {}, void 0, true)
        ]),
        createElementVNode("div", _hoisted_3$2, [
          renderSlot(_ctx.$slots, "center", {}, void 0, true)
        ]),
        createElementVNode("div", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "right", {}, void 0, true),
          createElementVNode("div", _hoisted_5$1, [
            createVNode(unref(ElIcon), {
              size: iconSize$1,
              onClick: _cache[0] || (_cache[0] = ($event) => emits("palette"))
            }, {
              default: withCtx(() => [
                createVNode(PaletteSvg)
              ]),
              _: 1
            }),
            createVNode(unref(ElIcon), { size: iconSize$1 }, {
              default: withCtx(() => [
                createVNode(ShezhiSvg)
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_44f8c9d7_lang = "";
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-44f8c9d7"]]);
const _hoisted_1$2 = { class: "app-main--wrapper" };
const _hoisted_2$2 = { class: "main-content--box" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  props: {
    route: {},
    backgroundColor: { default: "#fff" }
  },
  emits: ["click-tab", "remove-tab"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "04be21be": _ctx.backgroundColor
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
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
        createElementVNode("div", _hoisted_2$2, [
          createVNode(_component_router_view, null, {
            default: withCtx(({ Component, route }) => [
              createVNode(Transition, {
                mode: "out-in",
                name: "app-view--transition"
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
const Main_vue_vue_type_style_index_0_scoped_76fbc6e8_lang = "";
const Main = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-76fbc6e8"]]);
const iconSize = 18;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
        class: "app-menu--content",
        router: ""
      }, _ctx.$attrs), {
        default: withCtx(() => [
          createVNode(_sfc_main$4, { menus: _ctx.menus }, null, 8, ["menus"])
        ]),
        _: 1
      }, 16, ["default-active", "collapse"]);
    };
  }
});
const Menu_vue_vue_type_style_index_0_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-6200c05e"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "toggle-collapse--one" }, null, -1));
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "toggle-collapse--two" }, null, -1));
const _hoisted_3$1 = [
  _hoisted_1$1,
  _hoisted_2$1
];
const miniMenuWidth = 58;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    asideWidth: { default: 200 },
    menus: { default: () => [] },
    activeMenuKey: {}
  },
  emits: ["collapse"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emits = __emit;
    let diffWidth = __props.asideWidth - miniMenuWidth;
    const collapse = ref(false);
    const onCollapse = () => {
      collapse.value = !collapse.value;
      if (collapse.value) {
        diffWidth = __props.asideWidth - miniMenuWidth;
      }
      const width = collapse.value ? miniMenuWidth : miniMenuWidth + diffWidth;
      emits("collapse", width);
    };
    __expose({
      collapse,
      onCollapse
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3, {
          "aside-width": _ctx.asideWidth,
          menus: _ctx.menus,
          "default-menu-path-active": _ctx.activeMenuKey,
          collapse: collapse.value
        }, null, 8, ["aside-width", "menus", "default-menu-path-active", "collapse"]),
        createElementVNode("div", {
          class: normalizeClass(["toggle-collapse", collapse.value ? "collapse" : ""]),
          onClick: onCollapse
        }, _hoisted_3$1, 2)
      ], 64);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6200c05e_lang = "";
const Aside = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6200c05e"]]);
const _withScopeId = (n) => (pushScopeId("data-v-0f816e63"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "app-layout-type--wrapper" };
const _hoisted_2 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "100",
  height: "100",
  fill: "none",
  stroke: "black",
  "stroke-width": "2",
  class: "layout-type--active"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", {
  d: "M5 12L9 16 19 6",
  fill: "none",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1));
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = ["effect"];
const _hoisted_6 = ["effect"];
const _hoisted_7 = { class: "handle-btns" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSetting",
  props: {
    systemOption: {}
  },
  emits: ["update:systemOption", "close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const option = reactive({
      spans: 24,
      labelWidth: 70,
      labelPosition: "top",
      formItems: [
        {
          type: "color-picker",
          prop: "primary",
          label: "主题色"
        },
        {
          type: "custom",
          prop: "layout",
          label: "布局"
        },
        // {
        //     type: 'custom',
        //     prop: 'headerStyle',
        //     label: '头部背景色',
        // },
        {
          type: "inputNumber",
          prop: "headerHeight",
          label: "头部高度",
          props: {
            min: 60,
            max: 120,
            controlsPosition: "right"
          }
        },
        {
          type: "inputNumber",
          prop: "asideWidth",
          label: "侧边栏宽度",
          props: {
            controlsPosition: "right"
          }
        }
      ]
    });
    const layoutOption = [
      { label: "经典1", value: "ahm", effect: "dark" },
      { label: "经典2", value: "am", effect: "dark" },
      { label: "经典3", value: "ham", effect: "dark" },
      { label: "经典4", value: "hm", effect: "dark" },
      { label: "经典5", value: "ahm", effect: "light" },
      { label: "经典6", value: "am", effect: "light" },
      { label: "经典7", value: "ham", effect: "light" },
      { label: "经典8", value: "hm", effect: "light" }
    ];
    const modelValue = useDefineModel(props, "systemOption", emits, props.systemOption);
    const handleChangeLayout = (item) => {
      modelValue.value = {
        ...modelValue.value,
        typography: item.value,
        effect: item.effect
      };
    };
    const handleApplication = () => {
      localStorage.setItem("AppOptions", JSON.stringify(props.systemOption));
      emits("close");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(AoeForm), {
          "form-props": option,
          modelValue: unref(modelValue),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null)
        }, {
          layout: withCtx(() => [
            createVNode(unref(ElRow), {
              gutter: 10,
              style: { "width": "100%" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock(Fragment, null, renderList(layoutOption, (item) => {
                  return createVNode(unref(ElCol), {
                    span: 6,
                    onClick: ($event) => handleChangeLayout(item)
                  }, {
                    default: withCtx(() => [
                      createElementVNode("div", _hoisted_1, [
                        createElementVNode("div", {
                          class: normalizeClass(["layout-type--content", `${item.value}`])
                        }, [
                          _ctx.systemOption.typography === item.value && _ctx.systemOption.effect === item.effect ? (openBlock(), createElementBlock("svg", _hoisted_2, _hoisted_4)) : createCommentVNode("", true),
                          createElementVNode("div", {
                            class: "layout-type--head",
                            effect: `[${item.effect}]`
                          }, null, 8, _hoisted_5),
                          createElementVNode("div", {
                            class: "layout-type--aside",
                            effect: `[${item.effect}]`
                          }, null, 8, _hoisted_6)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 64))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["form-props", "modelValue"]),
        createElementVNode("div", _hoisted_7, [
          createVNode(unref(ElButton), {
            type: "primary",
            onClick: handleApplication
          }, {
            default: withCtx(() => [
              createTextVNode("应 用")
            ]),
            _: 1
          }),
          createVNode(unref(ElButton), {
            type: "info",
            onClick: _cache[1] || (_cache[1] = ($event) => emits("close"))
          }, {
            default: withCtx(() => [
              createTextVNode("取 消")
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
const ThemeSetting_vue_vue_type_style_index_0_scoped_0f816e63_lang = "";
const ThemeSetting = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f816e63"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    menus: {},
    router: {}
  },
  setup(__props) {
    const aside = ref();
    onBeforeMount(() => {
      const AppOptions = JSON.parse(localStorage.getItem("AppOptions") || "{}");
      if (AppOptions) {
        Object.assign(option.value, AppOptions);
      }
    });
    const visibleDrawer = ref(false);
    const openPalette = () => {
      var _a;
      if ((_a = aside.value) == null ? void 0 : _a.collapse) {
        aside.value.onCollapse();
      }
      visibleDrawer.value = true;
    };
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
      },
      primary: "#4482F1",
      effect: "dark"
    });
    const handleMenuCollapse = (width) => {
      option.value.asideWidth = width;
    };
    const handleTabClick = (_e, tab, _index) => {
      __props.router.push(tab.key);
    };
    const handleTabRemove = (lastKey, _tab, _index) => {
      __props.router.push(lastKey);
    };
    watch(
      () => option.value.primary,
      (val) => {
        const colors = handleElementTheme(val);
        const varStyle = Object.entries(colors).map(([key, value]) => {
          return `${key}: ${value};`;
        }).join("\n");
        const innerStyle = `:root{
${varStyle}
}`;
        const hasAppElementTheme = document.getElementById("app-element-theme");
        if (hasAppElementTheme) {
          hasAppElementTheme.innerHTML = innerStyle;
          return;
        }
        const style = document.createElement("style");
        style.id = `app-element-theme`;
        style.innerHTML = innerStyle;
        document.body.appendChild(style);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElConfigProvider), {
        locale: unref(zhCn),
        size: "default"
      }, {
        default: withCtx(() => [
          createVNode(unref(AoeBaseArchitecture), { option: option.value }, {
            header: withCtx(() => [
              createVNode(Header, { onPalette: openPalette }, {
                left: withCtx(() => [
                  renderSlot(_ctx.$slots, "head-left")
                ]),
                center: withCtx(() => [
                  renderSlot(_ctx.$slots, "head-center")
                ]),
                right: withCtx(() => [
                  renderSlot(_ctx.$slots, "head-right")
                ]),
                _: 3
              })
            ]),
            aside: withCtx(() => [
              createVNode(Aside, {
                ref_key: "aside",
                ref: aside,
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
            _: 3
          }, 8, ["option"]),
          createVNode(unref(ElDrawer), {
            title: "系统设置",
            modelValue: visibleDrawer.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => visibleDrawer.value = $event),
            direction: "rtl",
            size: "30%"
          }, {
            default: withCtx(() => [
              createVNode(ThemeSetting, {
                "system-option": option.value,
                "onUpdate:systemOption": _cache[0] || (_cache[0] = ($event) => option.value = $event),
                onClose: _cache[1] || (_cache[1] = ($event) => visibleDrawer.value = false)
              }, null, 8, ["system-option"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 3
      }, 8, ["locale"]);
    };
  }
});
const AoeMain = withInstall(_sfc_main);
export {
  AoeMain as A
};

import { _ as _export_sfc, w as withInstall } from "../vendor.js";
import Draggabilly from "draggabilly";
import { ElTooltip, ClickOutside, ElIcon } from "element-plus";
import { A as AoeSymbolIcon } from "../symbol-icon/symbol-icon.js";
import { defineComponent, ref, withDirectives, openBlock, createElementBlock, createVNode, unref, withCtx, renderSlot, mergeModels, useCssVars, useModel, onMounted, Fragment, createElementVNode, withModifiers, normalizeClass, createCommentVNode, toDisplayString, renderList, pushScopeId, popScopeId, reactive, onUnmounted, nextTick, resolveComponent, normalizeStyle, vShow, createTextVNode, createStaticVNode } from "vue";
import VueDraggable from "vuedraggable/src/vuedraggable";
const dropdownItems = [
  {
    icon: "aoe-fire",
    label: "关闭",
    value: "close"
  },
  {
    icon: "aoe-fire",
    label: "重新加载",
    value: "reload"
  },
  {
    icon: "aoe-disc",
    label: "关闭其他",
    value: "close-rest"
  },
  {
    icon: "aoe-chicago-bulls-style-uniform",
    label: "关闭右侧",
    value: "close-right"
  },
  {
    icon: "aoe-chicago-bulls-style-uniform",
    label: "关闭左侧",
    value: "close-left"
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "popover-menu",
  setup(__props, { expose: __expose }) {
    const visible = ref(false);
    const triggerRef = ref({
      getBoundingClientRect() {
        return domRect.value;
      }
    });
    let trigger = null;
    const onClickOutside = () => {
      if (trigger) {
        trigger = null;
        return;
      }
      visible.value = false;
    };
    const domRect = ref();
    const show = (el) => {
      trigger = el;
      domRect.value = el.getBoundingClientRect();
      visible.value = true;
    };
    __expose({ show });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createVNode(unref(ElTooltip), {
          visible: visible.value,
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
          placement: "bottom",
          effect: "light",
          trigger: "click",
          transition: "popper-meun-fade",
          "virtual-triggering": "",
          "virtual-ref": triggerRef.value,
          "popper-class": "popper-meun"
        }, {
          content: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["visible", "virtual-ref"])
      ])), [
        [unref(ClickOutside), onClickOutside]
      ]);
    };
  }
});
const popoverMenu_vue_vue_type_style_index_0_scoped_dc766a5d_lang = "";
const PopoverMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dc766a5d"]]);
const _withScopeId = (n) => (pushScopeId("data-v-052b0d66"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  class: "tab-wrapper",
  ref: "tabwrapRef"
};
const _hoisted_2$1 = ["onClick", "onContextmenu"];
const _hoisted_3$1 = { class: "tab-icon" };
const _hoisted_4$1 = { class: "tab-label" };
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8",
  height: "8",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ createElementVNode("line", {
    x1: "0",
    y1: "0",
    x2: "8",
    y2: "8",
    stroke: "black",
    "stroke-width": "1"
  }),
  /* @__PURE__ */ createElementVNode("line", {
    x1: "0",
    y1: "8",
    x2: "8",
    y2: "0",
    stroke: "black",
    "stroke-width": "1"
  })
], -1));
const _hoisted_7$1 = [
  _hoisted_6$1
];
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  class: "tab-radius-before",
  width: "7",
  height: "7"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z" })
], -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  class: "tab-radius-after",
  width: "7",
  height: "7"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z" })
], -1));
const _hoisted_10 = [
  _hoisted_8$1,
  _hoisted_9
];
const _hoisted_11 = { class: "tab-popover-menu" };
const _hoisted_12 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tab-panel-pro",
  props: mergeModels({
    width: { default: 180 },
    height: { default: 30 },
    backgroundColor: { default: "var(--el-color-primary-light-7)" },
    highlightBgColor: { default: "#fff" },
    highlightFontColor: {},
    fontSize: { default: 14 },
    radius: { default: 8 },
    hoverBg: { default: "var(--el-color-primary-light-3)" },
    append: {},
    tabs: {},
    props: {},
    modelValue: {}
  }, {
    "modelValue": {
      required: true
      // local: false,
    },
    "tabs": {
      local: false
    }
  }),
  emits: mergeModels(["contextmenu", "click", "tab-change"], ["update:modelValue", "update:tabs"]),
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "05a5f86e": props.width,
      "c10b5222": props.radius,
      "72ff88e7": props.highlightBgColor,
      "7dc16518": props.backgroundColor,
      "e2b708f8": props.height,
      "7c352fe6": props.fontSize,
      "57b1d3e4": props.hoverBg
    }));
    const props = __props;
    const modelValue = useModel(__props, "modelValue");
    const modelTabs = useModel(__props, "tabs", { local: false });
    const emits = __emit;
    const handleClick = (e, tab) => {
      e.stopPropagation();
      modelValue.value = tab[props.props["key"]];
      emits("click", e, tab);
    };
    const popoverMenu = ref();
    let currentIndex = 0;
    const handleContextMenu = (e, tab, i) => {
      currentIndex = i;
      popoverMenu.value.show(e.currentTarget);
      emits("contextmenu", e, tab);
    };
    const handleMenuClick = (cmd) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (((_a = modelTabs.value) == null ? void 0 : _a.length) === 1)
        return;
      switch (cmd) {
        case "close":
          onClosed(currentIndex);
          break;
        case "close-rest":
          (_b = modelTabs.value) == null ? void 0 : _b.splice(currentIndex + 1);
          (_c = modelTabs.value) == null ? void 0 : _c.splice(0, currentIndex);
          const acRestTab = (_d = modelTabs.value) == null ? void 0 : _d[0];
          modelValue.value = acRestTab == null ? void 0 : acRestTab[props.props["key"]];
          emits("tab-change", acRestTab == null ? void 0 : acRestTab[props.props["key"]], acRestTab);
          break;
        case "close-left":
          if (currentIndex == 0)
            break;
          (_e = modelTabs.value) == null ? void 0 : _e.splice(0, currentIndex);
          const acLeftTab = (_f = modelTabs.value) == null ? void 0 : _f[0];
          modelValue.value = acLeftTab == null ? void 0 : acLeftTab[props.props["key"]];
          emits("tab-change", acLeftTab == null ? void 0 : acLeftTab[props.props["key"]], acLeftTab);
          break;
        case "close-right":
          (_g = modelTabs.value) == null ? void 0 : _g.splice(currentIndex + 1);
          const acRightTab = (_h = modelTabs.value) == null ? void 0 : _h[currentIndex];
          modelValue.value = acRightTab == null ? void 0 : acRightTab[props.props["key"]];
          emits("tab-change", acRightTab == null ? void 0 : acRightTab[props.props["key"]], acRightTab);
          break;
      }
    };
    const onClosed = (i) => {
      var _a, _b, _c, _d;
      if (((_a = modelTabs.value) == null ? void 0 : _a.length) === 1)
        return;
      const closeKey = (_b = modelTabs.value) == null ? void 0 : _b[i][props.props["key"]];
      (_c = modelTabs.value) == null ? void 0 : _c.splice(i, 1);
      if (closeKey !== modelValue.value) {
        return;
      }
      const acTab = (_d = modelTabs.value) == null ? void 0 : _d[i - 1];
      const acKey = acTab == null ? void 0 : acTab[props.props["key"]];
      modelValue.value = acKey;
      emits("tab-change", acKey, acTab);
    };
    const tabRef = ref();
    const itemRef = (bool, i, _e) => {
      if (bool && i < modelTabs.value.length) {
        let offsetX = 7;
        const gap = 5;
        if (tabRef.value) {
          offsetX = offsetX + (gap + props.width) * i;
          tabRef.value.style.left = offsetX + "px";
        }
      }
    };
    onMounted(() => {
    });
    const onDraggedStart = () => {
      tabRef.value.style.opacity = "0";
    };
    const onDraggedEnd = () => {
      tabRef.value.style.opacity = "1";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1$1, [
          createVNode(unref(VueDraggable), {
            modelValue: modelTabs.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelTabs.value = $event),
            onStart: onDraggedStart,
            onEnd: onDraggedEnd,
            class: "tab-draggable",
            "item-key": props.props["key"],
            animation: 200
          }, {
            item: withCtx(({ element, index }) => {
              var _a;
              return [
                createElementVNode("div", {
                  onClick: (e) => handleClick(e, element),
                  onContextmenu: withModifiers((e) => handleContextMenu(e, element, index), ["prevent", "stop"]),
                  class: normalizeClass({
                    "tab-item-ctn": true,
                    active: element[props.props["key"]] === props.modelValue
                  }),
                  ref: (e) => itemRef(element[props.props["key"]] === props.modelValue, index)
                }, [
                  element[props.props["key"]] === props.modelValue ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : createCommentVNode("", true),
                  createElementVNode("div", _hoisted_3$1, [
                    createVNode(unref(ElIcon), { size: 14 }, {
                      default: withCtx(() => [
                        createVNode(unref(AoeSymbolIcon), {
                          name: element[props.props.icon || "icon"]
                        }, null, 8, ["name"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createElementVNode("div", _hoisted_4$1, toDisplayString(element[props.props.label]), 1),
                  ((_a = modelTabs.value) == null ? void 0 : _a.length) !== 1 ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: "tab-close",
                    onClick: withModifiers(($event) => onClosed(index), ["stop", "prevent"])
                  }, _hoisted_7$1, 8, _hoisted_5$1)) : createCommentVNode("", true)
                ], 42, _hoisted_2$1)
              ];
            }),
            _: 1
          }, 8, ["modelValue", "item-key"]),
          createElementVNode("div", {
            class: "tab-item-ctn-active",
            ref_key: "tabRef",
            ref: tabRef
          }, _hoisted_10, 512)
        ], 512),
        createVNode(PopoverMenu, {
          ref_key: "popoverMenu",
          ref: popoverMenu
        }, {
          default: withCtx(() => [
            createElementVNode("ul", _hoisted_11, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dropdownItems), (item) => {
                var _a;
                return openBlock(), createElementBlock("li", {
                  key: item.value,
                  class: normalizeClass({ "el-dropdown-menu__item": true, "is-disabled": ((_a = modelTabs.value) == null ? void 0 : _a.length) === 1 }),
                  onClick: ($event) => handleMenuClick(item.value)
                }, [
                  createVNode(unref(ElIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(AoeSymbolIcon), {
                        name: item.icon
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1024),
                  createElementVNode("span", null, toDisplayString(item.label), 1)
                ], 10, _hoisted_12);
              }), 128))
            ])
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});
const tabPanelPro_vue_vue_type_style_index_0_scoped_052b0d66_lang = "";
const tabPanelPro_vue_vue_type_style_index_1_lang = "";
const TabPanelPro = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-052b0d66"]]);
const _sfc_main = defineComponent({
  name: "tab-panel",
  components: { ElIcon, SymbolIcon: AoeSymbolIcon },
  emits: ["click", "update:modelValue", "remove", "dragstart", "dragging", "dragend", "swap", "contextmenu"],
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    tabs: {
      type: Array,
      default: () => []
    },
    // 当宽度小于设置的值时，会自动隐藏关闭按钮
    autoHiddenCloseIconWidth: {
      type: Number,
      default: 120
    },
    // tab 的最小宽度
    minWidth: {
      type: Number,
      default: 40
    },
    // tab 的最大宽度
    maxWidth: {
      type: Number,
      default: 245
    },
    // 两个相邻的 tab 的空隙大小
    gap: {
      type: Number,
      default: 7
    },
    // backgroundColor: {
    //     type: String,
    //     default: '#dadde2',
    // },
    // 关闭事件
    onClose: {
      type: Function
    },
    // 新 tab 追加时，是否追加到当前 tab 之后
    insertToAfter: {
      type: Boolean,
      default: false
    },
    // 鼠标按下时，是否自动将命中的 tab 设置为激活状态
    isMousedownActive: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const $refs = reactive({});
    const tabWidth = ref(0);
    const calcTabWidth = () => {
      var _a;
      const { tabs, minWidth, maxWidth, gap } = props;
      const { $content } = $refs;
      const afterWidth = ((_a = $refs.$after) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
      if (!$content)
        return Math.max(maxWidth, minWidth);
      const contentWidth = $content.clientWidth - gap * 3 - afterWidth;
      let width = contentWidth / tabs.length;
      width += gap * 2;
      if (width > maxWidth)
        width = maxWidth;
      if (width < minWidth)
        width = minWidth;
      tabWidth.value = width;
    };
    const handlePointerDown = (e, tab, i) => {
      const { emit } = context;
      const { isMousedownActive } = props;
      if (isMousedownActive) {
        emit("update:modelValue", tab.key);
      }
      emit("dragstart", e, tab, i);
    };
    const handleDragMove = (e, tab, i) => {
      const { tabs, gap } = props;
      const { emit } = context;
      if (tab.swappable === false) {
        return;
      }
      const halfWidth = (tabWidth.value - gap) / 2;
      const { x } = tab._instance.position;
      let swapTab = null;
      for (let i2 = 0; i2 < tabs.length; i2++) {
        const currentTab = tabs[i2];
        const targetX = (currentTab._x || 1) - 1;
        if (tab.key === currentTab.key) {
          continue;
        }
        if (targetX <= x && x < targetX + halfWidth) {
          swapTab = currentTab;
          swapTabs(tab, swapTab);
          break;
        }
      }
      emit("dragging", e, tab, i);
    };
    const swapTabs = (tab, swapTab) => {
      if (swapTab.swappable === false) {
        return;
      }
      const { tabs } = props;
      const { emit } = context;
      let index = -1;
      let swapIndex = -1;
      for (let i = 0; i < tabs.length; i++) {
        const obj = tabs[i];
        if (obj.key === tab.key) {
          index = i;
        }
        if (obj.key === swapTab.key) {
          swapIndex = i;
        }
      }
      if (index < 0 || swapIndex < 0 || index === swapIndex) {
        return;
      }
      [tabs[index], tabs[swapIndex]] = [tabs[swapIndex], tabs[index]];
      const { _x } = tab;
      tab._x = swapTab._x;
      swapTab._x = _x;
      const { _instance } = swapTab;
      setTimeout(() => {
        _instance.element.classList.add("move");
        _instance.setPosition(_x, _instance.position.y);
      }, 50);
      setTimeout(() => {
        _instance.element.classList.remove("move");
        emit("swap", tab, swapTab);
      }, 200);
    };
    const handleDragEnd = (e, tab, i) => {
      const { _instance } = tab;
      const { emit } = context;
      if (_instance.position.x === 0)
        return;
      setTimeout(() => {
        _instance.element.classList.add("move");
        _instance.setPosition(tab._x, 0);
      }, 50);
      setTimeout(() => {
        _instance.element.classList.remove("move");
        emit("dragend", e, tab, i);
      }, 200);
      return false;
    };
    const handleClick = (e, tab, i) => {
      const { emit } = context;
      emit("click", e, tab, i);
    };
    const handleNativeClick = (e, tab, i) => {
      if (tab.dragable === false) {
        handleClick(e, tab, i);
      }
    };
    const handleContextMenu = (e, tab, i) => {
      const { emit } = context;
      emit("contextmenu", e, tab, i);
    };
    const handleDelete = (tab, i) => {
      const { tabs, modelValue, onClose } = props;
      const { emit } = context;
      const index = tabs.findIndex((item) => item.key === modelValue);
      if (typeof onClose === "function" && onClose(tab, tab.key, i) === false) {
        return false;
      }
      let after, before;
      if (i === index) {
        after = tabs[i + 1];
        before = tabs[i - 1];
      }
      if (after) {
        emit("update:modelValue", after.key);
      } else if (before) {
        emit("update:modelValue", before.key);
      } else if (tabs.length <= 1) {
        emit("update:modelValue", null);
      }
      tabs.splice(i, 1);
      emit("remove", tab, i);
      nextTick(() => {
        doLayout();
      });
    };
    const addTab = (tab) => {
      const { insertToAfter, tabs } = props;
      if (insertToAfter) {
        const hastab = tabs.find((item) => item.key === tab.key);
        if (hastab)
          return;
        tabs.push(tab);
      } else {
        tabs.push(tab);
      }
      nextTick(() => {
        init();
        doLayout();
      });
    };
    const removeTab = (tabKey) => {
      const { tabs } = props;
      if (typeof tabKey === "number") {
        const index = tabKey;
        const tab = tabs[index];
        handleDelete(tab, index);
      } else {
        const index = tabs.findIndex((item) => item.key === tabKey);
        const tab = tabs.find((item) => item.key === tabKey);
        if (tab) {
          handleDelete(tab, index);
        }
      }
    };
    let timer;
    const handleResize = () => {
      if (timer)
        window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        doLayout();
      }, 100);
    };
    const showTabCloseIcon = (tab) => {
      const { modelValue, autoHiddenCloseIconWidth, tabs } = props;
      if (tabs.length === 1)
        return false;
      if (tab.closable === false) {
        return false;
      }
      if (tab.key === modelValue) {
        return true;
      }
      if (autoHiddenCloseIconWidth > tabWidth.value) {
        return false;
      }
      return true;
    };
    const doLayout = () => {
      calcTabWidth();
      const { tabs, gap } = props;
      tabs.forEach((tab, i) => {
        const instance = tab._instance;
        const _x = (tabWidth.value - gap * 2) * i;
        tab._x = _x;
        instance.setPosition(_x, 0);
      });
    };
    const addInstance = (tab, i) => {
      const { gap } = props;
      if (tab._instance) {
        tab._instance.setPosition(tab._x, 0);
        return;
      }
      if (!tab.$el || !$refs.$content) {
        return;
      }
      tab._instance = new Draggabilly(tab.$el, {
        axis: "x",
        containment: $refs.$content,
        handle: ".tabs-main"
      });
      if (tab.dragable === false) {
        tab._instance.disable();
      }
      const x = (tabWidth.value - gap * 2) * i;
      tab._x = x;
      tab._instance.setPosition(x, 0);
      tab._instance.on("pointerDown", (e) => handlePointerDown(e, tab, i));
      tab._instance.on("dragMove", (e) => handleDragMove(e, tab, i));
      tab._instance.on("dragEnd", (e) => handleDragEnd(e, tab, i));
      tab._instance.on("staticClick", (e) => handleClick(e, tab, i));
    };
    const init = () => {
      props.tabs.forEach((tab, i) => {
        addInstance(tab, i);
      });
    };
    const setTabRef = (el, tab) => {
      if (el) {
        tab.$el = el;
      }
    };
    const setContentRef = (el) => {
      if (el) {
        $refs.$content = el;
      }
    };
    const setAfterRef = (el) => {
      if (el) {
        $refs.$after = el;
      }
    };
    onMounted(() => {
      calcTabWidth();
      init();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
      if (timer)
        window.clearTimeout(timer);
    });
    return {
      setTabRef,
      setContentRef,
      setAfterRef,
      tabWidth,
      handleDelete,
      handleContextMenu,
      showTabCloseIcon,
      handleNativeClick,
      doLayout,
      init,
      addTab,
      removeTab
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "tabs-wrapper" };
const _hoisted_2 = ["onContextmenu", "onClick"];
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="tabs-background"><div class="tabs-background-divider"></div><div class="tabs-background-content"></div><svg class="tabs-background-before" width="7" height="7"><path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z"></path></svg><svg class="tabs-background-after" width="7" height="7"><path d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z"></path></svg></div>', 1);
const _hoisted_4 = ["onClick"];
const _hoisted_5 = /* @__PURE__ */ createElementVNode("svg", {
  class: "tabs-close-icon",
  width: "16",
  height: "16",
  stroke: "#595959"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M 4 4 L 12 12 M 12 4 L 4 12" })
], -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = ["title"];
const _hoisted_8 = {
  key: 0,
  class: "tabs-favico"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_symbol_icon = resolveComponent("symbol-icon");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "tabs-content",
      ref: _ctx.setContentRef
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabs, (tab, i) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(["tabs-item", { active: tab.key === _ctx.modelValue }]),
          key: tab.key,
          style: normalizeStyle({ width: _ctx.tabWidth + "px" }),
          ref_for: true,
          ref: (e) => _ctx.setTabRef(e, tab),
          onContextmenu: (e) => _ctx.handleContextMenu(e, tab, i),
          onClick: (e) => _ctx.handleNativeClick(e, tab, i)
        }, [
          _hoisted_3,
          withDirectives(createElementVNode("div", {
            class: "tabs-close",
            onClick: withModifiers(($event) => _ctx.handleDelete(tab, i), ["stop"])
          }, _hoisted_6, 8, _hoisted_4), [
            [vShow, _ctx.showTabCloseIcon(tab)]
          ]),
          createElementVNode("div", {
            class: "tabs-main",
            title: tab.label
          }, [
            renderSlot(_ctx.$slots, "main", {
              tab,
              index: i
            }, () => [
              tab.icon ? (openBlock(), createElementBlock("span", _hoisted_8, [
                renderSlot(_ctx.$slots, "favico", {
                  tab,
                  index: i
                }, () => [
                  createVNode(_component_el_icon, { size: 16 }, {
                    default: withCtx(() => [
                      createVNode(_component_symbol_icon, {
                        name: tab.icon
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])) : createCommentVNode("", true),
              createElementVNode("span", {
                class: normalizeClass(["tabs-label", { "no-close": !_ctx.showTabCloseIcon(tab), "no-icon": !tab.favico }])
              }, [
                renderSlot(_ctx.$slots, "label", {
                  tab,
                  index: i
                }, () => [
                  createTextVNode(toDisplayString(tab.label), 1)
                ])
              ], 2)
            ])
          ], 8, _hoisted_7)
        ], 46, _hoisted_2);
      }), 128)),
      createElementVNode("span", {
        class: "tabs-after",
        ref: _ctx.setAfterRef,
        style: normalizeStyle({ left: (_ctx.tabWidth - _ctx.gap * 2) * _ctx.tabs.length + _ctx.gap * 2 + "px" })
      }, [
        renderSlot(_ctx.$slots, "after")
      ], 4)
    ], 512)
  ]);
}
const TabPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const AoeTabPanel = withInstall(TabPanel);
const AoeTabPanelPro = withInstall(TabPanelPro);
export {
  AoeTabPanel as A,
  TabPanelPro as T,
  AoeTabPanelPro as a
};

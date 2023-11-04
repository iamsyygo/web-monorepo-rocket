import { e as ElIcon, D as Draggabilly, _ as _export_sfc, w as withInstall } from "../vendor.js";
import { defineComponent, reactive, ref, onMounted, onUnmounted, nextTick, resolveComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, normalizeStyle, withDirectives, withModifiers, vShow, renderSlot, createVNode, withCtx, createCommentVNode, createTextVNode, toDisplayString, createStaticVNode } from "vue";
import { A as AoeSymbolIcon } from "../symbol-icon/symbol-icon.js";
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
export {
  AoeTabPanel as A
};
//# sourceMappingURL=tab-panel.js.map

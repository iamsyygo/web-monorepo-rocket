import { w as withInstall } from "../vendor.js";
import { defineComponent, reactive, createVNode, mergeProps, toRefs, onMounted, withDirectives, resolveDirective, isVNode, Fragment } from "vue";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import { ElDatePicker, ElInput, ElColorPicker, ElCheckboxGroup, ElCheckboxButton, ElCheckbox, ElSlider, ElRadioGroup, ElRadio, ElSwitch, ElSelect, ElInputNumber, ElForm, ElRow, ElCol, ElFormItem, ElTooltip, ElIcon } from "element-plus";
import { u as useDefineModel } from "../hooks/hooks.js";
const FormContent = /* @__PURE__ */ defineComponent({
  props: {
    option: {
      type: Object,
      default: () => {
      }
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object]
    }
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, {
    emit,
    attrs,
    expose,
    slots
  }) {
    const selectOptions = reactive({
      state: false,
      list: []
    });
    if (props.option.type === "select" || "radio" === props.option.type || "checkbox" === props.option.type || "checkboxButton" === props.option.type) {
      if (Array.isArray(props.option.options)) {
        selectOptions.list = props.option.options;
      } else {
        selectOptions.state = true;
        Promise.resolve(props.option.options()).then((res) => {
          selectOptions.list = res;
        }).finally(() => {
          selectOptions.state = false;
        });
      }
    }
    const modelValueCopy = useDefineModel(props, "modelValue", emit);
    return () => {
      var _a;
      const itemAttrs = Object.assign({}, props.option.props, attrs);
      const option = props.option;
      if (["date", "datetime", "daterange", "datetimerange", "year", "month"].includes(option.type)) {
        return createVNode(ElDatePicker, mergeProps({
          "modelValue": modelValueCopy.value,
          "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
        }, itemAttrs, {
          "type": option.type
        }), null);
      }
      switch (option.type) {
        case "input":
          return createVNode(ElInput, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        case "inputNumber":
          return createVNode(ElInputNumber, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        case "select":
          return createVNode(ElSelect, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event,
            "style": {
              width: "100%"
            }
          }, itemAttrs, {
            "loading": selectOptions.state
          }), {
            default: () => {
              var _a2;
              return [(_a2 = selectOptions.list) == null ? void 0 : _a2.map((item) => {
                const {
                  label = "label",
                  value = "value",
                  key
                } = option.optionProps || {};
                return createVNode(ElSelect.Option, {
                  "label": item[label],
                  "value": item[value],
                  "key": item[key || value]
                }, null);
              })];
            }
          });
        case "switch":
          return createVNode(ElSwitch, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        case "textarea":
          return createVNode(ElInput, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        case "radio":
          return createVNode(ElRadioGroup, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), {
            default: () => {
              var _a2;
              return [(_a2 = selectOptions.list) == null ? void 0 : _a2.map((item) => {
                const {
                  label = "label",
                  value = "value",
                  key
                } = option.optionProps || {};
                return createVNode(ElRadio, {
                  "label": item[value],
                  "key": item[key || value]
                }, {
                  default: () => [item[label]]
                });
              })];
            }
          });
        case "slider":
          return createVNode(ElSlider, mergeProps({
            "modelValue": modelValueCopy.value
          }, itemAttrs, {
            "onChange": (val) => modelValueCopy.value = val
          }), null);
        case "checkbox":
          return createVNode(ElCheckboxGroup, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), {
            default: () => {
              var _a2;
              return [(_a2 = selectOptions.list) == null ? void 0 : _a2.map((item) => {
                const {
                  label = "label",
                  value = "value",
                  key
                } = option.optionProps || {};
                return createVNode(ElCheckbox, {
                  "label": item[value],
                  "key": item[key || value]
                }, {
                  default: () => [item[label]]
                });
              })];
            }
          });
        case "checkboxButton":
          return createVNode(ElCheckboxGroup, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), {
            default: () => {
              var _a2;
              return [(_a2 = selectOptions.list) == null ? void 0 : _a2.map((item) => {
                const {
                  label = "label",
                  value = "value",
                  key
                } = option.optionProps || {};
                return createVNode(ElCheckboxButton, {
                  "label": item[value],
                  "key": item[key || value]
                }, {
                  default: () => [item[label]]
                });
              })];
            }
          });
        case "color-picker":
          return createVNode(ElColorPicker, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        case "custom":
          return ((_a = slots["custom"]) == null ? void 0 : _a.call(slots, itemAttrs)) ?? null;
        default:
          return createVNode(ElInput, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event,
            "clearable": true
          }, itemAttrs), null);
      }
    };
  }
});
const formProps = {
  modelValue: {
    type: Object,
    default: () => ({})
  },
  formProps: {
    type: Object,
    default: () => ({})
  }
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
function getSpanModel(n) {
  return {
    lg: n,
    md: n,
    sm: n,
    xl: n,
    xs: n
  };
}
function getSpan(value) {
  if (typeof value === "number") {
    return getSpanModel(value);
  }
  return value || getSpanModel(24);
}
function mergeRules(rules, required, label) {
  const data = [];
  if (rules)
    data.push(...Array.isArray(rules) ? rules : [rules]);
  if (required) {
    data.unshift({
      required: true,
      message: label ? `${label}是必填项` : "必填项",
      trigger: "blur"
    });
  }
  return data;
}
const Form = /* @__PURE__ */ defineComponent({
  props: formProps,
  emits: {
    "update:modelValue": (_val) => true
  },
  slots: Object,
  directives: {
    "auto-animate": vAutoAnimate
  },
  setup(props, {
    emit,
    attrs,
    expose,
    slots
  }) {
    const {
      formProps: formProps2,
      modelValue
    } = toRefs(props);
    const model = useDefineModel(props, "modelValue", emit);
    onMounted(() => {
      var _a;
      const defaultModelValues = (_a = props.formProps.formItems) == null ? void 0 : _a.reduce((acc, item) => {
        if (item.defaultValue !== void 0)
          acc[item.prop] = item.defaultValue;
        return acc;
      }, {});
      model.value = Object.assign({}, defaultModelValues, modelValue.value);
    });
    const isInlined = formProps2.value.inline || attrs.inline;
    const autoAnimateOption = {
      easing: "ease-out",
      duration: 300,
      disrespectUserMotionPreference: true
    };
    const formAttrs = Object.assign({}, formProps2.value, attrs);
    const {
      "insert-before": insertBeforeVnode,
      "insert-after": insertAfterVnode,
      "form-items-label": formItemslabel
    } = slots;
    const defaultItemVnode = (item, prop) => {
      if (slots[prop])
        return slots[prop]({
          ...item
        });
      return createVNode(FormContent, {
        "modelValue": model.value[prop],
        "onUpdate:modelValue": ($event) => model.value[prop] = $event,
        "option": item
      }, null);
    };
    const itemLabelVnode = (item) => {
      if (slots[item.prop + "-label"])
        return slots[item.prop + "-label"]({
          ...item
        });
      if (formItemslabel)
        return formItemslabel({
          ...item
        });
      return createVNode(Fragment, null, [createVNode("span", null, [item.label]), createVNode("span", {
        "style": {
          width: "11px",
          display: "inline-block"
        }
      }, [item.tooltip ? createVNode(ElTooltip, {
        "effect": "dark",
        "content": item.tooltip,
        "placement": "left"
      }, {
        default: () => [createVNode(ElIcon, null, {
          default: () => [createVNode("svg", {
            "viewBox": "0 0 1024 1024",
            "xmlns": "http://www.w3.org/2000/svg"
          }, [createVNode("path", {
            "d": "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
          }, null)])]
        })]
      }) : null])]);
    };
    return () => {
      let _slot;
      return createVNode(ElForm, mergeProps({
        "ref": "formRef",
        "model": model.value
      }, formAttrs), {
        default: () => [withDirectives(createVNode(ElRow, {
          "gutter": 10
        }, {
          default: () => {
            var _a;
            return [!!insertBeforeVnode && createVNode(ElCol, mergeProps({
              "key": "insert-before"
            }, getSpan(24)), {
              default: () => [" ", insertBeforeVnode({
                value: props.modelValue
              }), " "]
            }), (_a = formProps2.value.formItems) == null ? void 0 : _a.reduce((acc, item) => {
              const {
                props: props2,
                type,
                span,
                rules,
                ...rest
              } = item;
              if (item.controller && !item.controller({
                value: modelValue.value,
                option: item
              })) {
                return acc;
              }
              const sp = span || formProps2.value.spans;
              acc.push(createVNode(ElCol, mergeProps({
                "key": item.prop
              }, getSpan(isInlined ? sp : 24)), {
                default: () => [createVNode(ElFormItem, mergeProps(rest, {
                  "rules": mergeRules(rules, item.required, item.label)
                }), {
                  default: () => defaultItemVnode(item, rest.prop),
                  label: () => itemLabelVnode(item)
                })]
              }));
              return acc;
            }, []), !!insertAfterVnode && createVNode(ElCol, mergeProps({
              "key": "insert-after"
            }, getSpan(isInlined ? formProps2.value.spans : 24)), _isSlot(_slot = slots["insert-after"]({
              value: props.modelValue
            })) ? _slot : {
              default: () => [_slot]
            })];
          }
        }), [[resolveDirective("auto-animate"), autoAnimateOption]])]
      });
    };
  }
});
const AoeForm = withInstall(Form);
export {
  AoeForm as A,
  formProps as f
};

import { d as ElInput, e as ElSlider, f as ElRadioGroup, g as ElRadio, h as ElSwitch, i as ElSelect, v as vAutoAnimate, j as ElForm, k as ElRow, l as ElCol, m as ElFormItem, w as withInstall } from "../vendor.js";
import { defineComponent, reactive, createVNode, mergeProps, toRefs, onMounted, withDirectives, resolveDirective, isVNode } from "vue";
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
    if (props.option.type === "select" || "radio" === props.option.type) {
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
      const itemAttrs = Object.assign({}, props.option, attrs);
      switch (props.option.type) {
        case "input":
          return createVNode(ElInput, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        case "select":
          return createVNode(ElSelect, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs, {
            "loading": selectOptions.state
          }), {
            default: () => {
              var _a;
              return [(_a = selectOptions.list) == null ? void 0 : _a.map((item) => {
                const {
                  label = "label",
                  value = "value",
                  key
                } = props.option.optionProps || {};
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
              var _a;
              return [(_a = selectOptions.list) == null ? void 0 : _a.map((item) => {
                const {
                  label = "label",
                  value = "value",
                  key
                } = props.option.optionProps || {};
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
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
          }, itemAttrs), null);
        default:
          return createVNode(ElInput, mergeProps({
            "modelValue": modelValueCopy.value,
            "onUpdate:modelValue": ($event) => modelValueCopy.value = $event
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
const Form = /* @__PURE__ */ defineComponent({
  props: formProps,
  emits: {
    "update:modelValue": (val) => true
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
      const defaultModelValues = props.formProps.formItems.reduce((acc, item) => {
        if (item.defaultValue !== void 0)
          acc[item.prop] = item.defaultValue;
        return acc;
      }, {});
      model.value = Object.assign({}, defaultModelValues, modelValue.value);
    });
    const isInlined = formProps2.value.inline || attrs.inline;
    return () => {
      let _slot, _slot2;
      return createVNode(ElForm, mergeProps({
        "ref": "formRef",
        "model": model.value
      }, formProps2, attrs), {
        default: () => [withDirectives(createVNode(ElRow, {
          "gutter": 10
        }, {
          default: () => [slots["insert-before"] ? createVNode(ElCol, mergeProps({
            "key": "insert-before"
          }, getSpan(24)), _isSlot(_slot = slots["insert-before"]({
            value: props.modelValue
          })) ? _slot : {
            default: () => [_slot]
          }) : null, formProps2.value.formItems.reduce((acc, item) => {
            const {
              props: props2,
              type,
              span,
              ...rest
            } = item;
            if (item.controller && !item.controller({
              value: modelValue.value,
              option: item
            }))
              return acc;
            acc.push(createVNode(ElCol, mergeProps({
              "key": item.prop
            }, getSpan(isInlined ? 24 : span || formProps2.value.spans)), {
              default: () => [createVNode(ElFormItem, rest, {
                default: () => {
                  var _a;
                  return [((_a = slots[rest.prop]) == null ? void 0 : _a.call(slots, {
                    ...item
                  })) || createVNode(FormContent, {
                    "modelValue": model.value[rest.prop],
                    "onUpdate:modelValue": ($event) => model.value[rest.prop] = $event,
                    "option": item
                  }, null)];
                }
              })]
            }));
            return acc;
          }, []), slots["insert-after"] ? createVNode(ElCol, mergeProps({
            "key": "insert-after"
          }, getSpan(isInlined ? 24 : formProps2.value.spans)), _isSlot(_slot2 = slots["insert-after"]({
            value: props.modelValue
          })) ? _slot2 : {
            default: () => [_slot2]
          }) : null]
        }), [[resolveDirective("auto-animate"), {
          easing: "linear",
          duration: 300,
          disrespectUserMotionPreference: true
        }]])]
      });
    };
  }
});
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
  if (!value)
    return getSpanModel(24);
  if (typeof value === "number") {
    return getSpanModel(value);
  }
  return value;
}
const AoeForm = withInstall(Form);
export {
  AoeForm as A,
  formProps as f
};

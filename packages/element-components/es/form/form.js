import { d as ElInput, e as ElSelect, f as ElForm, g as ElRow, h as ElCol, i as ElFormItem, w as withInstall } from "../vendor.js";
import { defineComponent, createVNode, mergeProps, isVNode } from "vue";
import { u as useDefineModel } from "../hooks/hooks.js";
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
    const {
      option
    } = props;
    const value = useDefineModel(props, "modelValue", emit);
    return () => {
      const itemAttrs = Object.assign({}, option, attrs);
      switch (option.type) {
        case "input":
          return createVNode(ElInput, mergeProps({
            "modelValue": value.value,
            "onUpdate:modelValue": ($event) => value.value = $event
          }, itemAttrs), null);
        case "select":
          return createVNode(ElSelect, mergeProps({
            "modelValue": value.value,
            "onUpdate:modelValue": ($event) => value.value = $event
          }, itemAttrs), {
            default: () => {
              var _a;
              return [(_a = option.options) == null ? void 0 : _a.map((item) => {
                const {
                  label = "label",
                  value: value2 = "value",
                  key
                } = option.optionProps || {};
                return createVNode(ElSelect.Option, {
                  "label": item[label],
                  "value": item[value2],
                  "key": item[key || value2]
                }, null);
              })];
            }
          });
        default:
          return createVNode(ElInput, mergeProps({
            "modelValue": value.value,
            "onUpdate:modelValue": ($event) => value.value = $event
          }, itemAttrs), null);
      }
    };
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const Form = /* @__PURE__ */ defineComponent({
  props: formProps,
  emits: {
    "update:modelValue": (val) => true
  },
  // slots: ['default'],
  setup(props, {
    emit,
    attrs,
    expose,
    slots
  }) {
    console.log(props);
    const {
      formProps: formProps2
    } = props;
    const model = useDefineModel(props, "modelValue", emit);
    const isInlined = formProps2.inline || attrs.inline;
    return () => {
      let _slot;
      return createVNode(ElForm, mergeProps({
        "ref": "formRef",
        "model": model.value
      }, formProps2, attrs), {
        default: () => [createVNode(ElRow, {
          "gutter": 10
        }, _isSlot(_slot = formProps2.formItems.map((item) => {
          const {
            props: props2,
            type,
            span,
            ...rest
          } = item;
          return createVNode(ElCol, getSpan(isInlined ? 24 : span || formProps2.spans), {
            default: () => [createVNode(ElFormItem, rest, {
              default: () => [createVNode("slot", {
                "name": rest.prop,
                "item": item
              }, [createVNode(FormContent, {
                "modelValue": model.value[rest.prop],
                "onUpdate:modelValue": ($event) => model.value[rest.prop] = $event,
                "option": item
              }, null)])]
            })]
          });
        })) ? _slot : {
          default: () => [_slot]
        })]
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

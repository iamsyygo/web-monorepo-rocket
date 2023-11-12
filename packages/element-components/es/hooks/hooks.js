import { computed } from "vue";
function useDefineModel(props, fieldName, emits) {
  return computed({
    get() {
      if (!props[fieldName] || typeof props[fieldName] !== "object")
        return props[fieldName];
      const proxy = new Proxy(props[fieldName], {
        get(target, key, receiver) {
          return Reflect.get(target, key, receiver);
        },
        set(target, key, newValue, _receiver) {
          emits("update:" + fieldName, {
            ...target,
            [key]: newValue
          });
          return true;
        }
      });
      return proxy;
    },
    set(val) {
      emits("update:" + fieldName, val);
    }
  });
}
export {
  useDefineModel as u
};

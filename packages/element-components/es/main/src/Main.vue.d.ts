import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { Tab } from '../../tab-panel/index.vue';
export type Tabs = Tab[];
declare const _default: import("vue").DefineComponent<{
    route: {
        type: import("vue").PropType<RouteLocationNormalizedLoaded>;
        required: true;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click-tab": (e: MouseEvent, tab: Tab, index: number) => void;
    "remove-tab": (lastKey: string, tab: Tab, index: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    route: {
        type: import("vue").PropType<RouteLocationNormalizedLoaded>;
        required: true;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
    };
}>> & {
    "onClick-tab"?: ((e: MouseEvent, tab: Tab, index: number) => any) | undefined;
    "onRemove-tab"?: ((lastKey: string, tab: Tab, index: number) => any) | undefined;
}, {}, {}>;
export default _default;

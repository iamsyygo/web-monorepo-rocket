import { ArchitectureOption } from '../../base-architecture/index.vue';
declare const _default: import("vue").DefineComponent<{
    systemOption: {
        type: import("vue").PropType<ArchitectureOption>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:systemOption": (val: ArchitectureOption) => void;
    close: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    systemOption: {
        type: import("vue").PropType<ArchitectureOption>;
        required: true;
    };
}>> & {
    "onUpdate:systemOption"?: ((val: ArchitectureOption) => any) | undefined;
    onClose?: (() => any) | undefined;
}, {}, {}>;
export default _default;

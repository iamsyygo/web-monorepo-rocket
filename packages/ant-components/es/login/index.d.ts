export declare const AoeLogin: import("@aoe/utils").SFCWithInstall<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    signin: (model: {
        username: string;
        password: string;
        remember: boolean;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onSignin?: ((model: {
        username: string;
        password: string;
        remember: boolean;
    }) => any) | undefined;
}, {}, {}>> & Record<string, any>;
export default AoeLogin;

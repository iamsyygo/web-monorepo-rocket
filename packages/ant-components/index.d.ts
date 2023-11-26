import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { SFCWithInstall } from '@aoe/utils';
import { VNodeProps } from 'vue';

export declare const AoeForm: SFCWithInstall<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>> & Record<string, any>;

export declare const AoeLogin: SFCWithInstall<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
signin: (model: {
username: string;
password: string;
remember: boolean;
}) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {}>> & {
onSignin?: ((model: {
username: string;
password: string;
remember: boolean;
}) => any) | undefined;
}, {}, {}>> & Record<string, any>;

export declare const AoeSymbolIcon: SFCWithInstall<DefineComponent<    {
name: {
type: PropType<any>;
required: true;
};
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<    {
name: {
type: PropType<any>;
required: true;
};
}>>, {}, {}>> & Record<string, any>;

export { }

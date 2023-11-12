import { FormItemProps, ColProps, inputProps, ElSelect, ElForm, ElRadio } from 'element-plus';
import { ExtractPropTypes, PropType } from 'vue';
/**
 * ExtractPropTypes 用于提取组件的 props 类型
 * @example
 * const props = {
 *  a: {
 *   type: String,
 *   default: 'a'
 *  },
 * }
 * type Props = ExtractPropTypes<typeof props>;
 *
 * InstanceType 用于获取组件实例的类型, 可以用于获取组件的 $props 类型
 * @example
 * InstanceType<typeof ElSelect>['$props']
 */
export type FormItemType = 'input' | 'select' | 'radio' | 'checkbox' | 'switch' | 'date' | 'time' | 'rate' | 'color' | 'slider' | 'upload' | 'cascader' | 'transfer' | 'inputNumber' | 'autocomplete' | 'checkboxButton' | 'radioButton' | 'option' | 'optionGroup' | 'button' | 'textarea' | 'form';
export type Span = Omit<ColProps, 'tag' | 'push' | 'span' | 'offset' | 'pull'>;
export type CommonFormItemProp = PartialProp<FormItemProps, 'inlineMessage' | 'labelWidth' | 'showMessage'>;
/**
 * 将某些属性变为可选
 * @example
 * type Props = {
 *    a: string;
 *    b: number;
 *    c: boolean;
 * }
 * type PartialProps = PartialProp<Props, 'a' | 'b'>;
 */
export type PartialProp<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
/** 将某些属性变为可选 */
/**
 * 将element-plus的props中的某些属性去掉
 * @example
 * type Props = {
 *   a: string;
 *   b: number;
 *   c: boolean;
 * }
 * type OmitProps = OmitElementProp<Props, 'a' | 'b'>;
 */
export type OmitElementProp<T, K extends keyof T> = Omit<ExtractPropTypes<T>, K>;
/**
 * 将 OmitElementProp 全部变为可选
 * @example
 *
 */
export type PartialOmitElementProp<T, K extends keyof T> = Partial<OmitElementProp<T, K>>;
/**
 * 生成表单项的类型
 * @example
 * type InputProp = FormItemTypeProp<'input', PartialOmitElementProp<typeof inputProps, 'modelValue' | 'placeholder' | 'size'>>;
 */
type FormItemTypeProp<T extends FormItemType, P> = CommonFormItemProp & {
    type: T;
    prop: string;
    defaultValue?: any;
    placeholder?: string;
    span?: Span | number;
    props?: P;
    controller?: Controller;
};
/** 生成表单项的类型 */
type Controller = (data: {
    value: any;
    option: FormItemTypeProps;
}) => boolean;
/**
 * 获取数组对象中的某个属性的值组成的组合类型
 * @example
 * const arr = [{a: 1}, {a: 2}, {a: 3}];
 * type A = ObjectPropType<typeof arr, 'a'>; // > 1 | 2 | 3
 */
export type ObjectPropType<T extends any[], K extends keyof T[number]> = T[number][K];
/** 获取数组对象中的某个属性的值组成的组合类型 */
type MultipleFormItemProp = FormItemTypeProp<'input' | 'textarea' | 'switch' | 'slider', PartialOmitElementProp<typeof inputProps, 'modelValue' | 'placeholder' | 'size'>>;
type SelectProp = FormItemTypeProp<'select', OmitElementProp<InstanceType<typeof ElSelect>['$props'], 'modelValue' | 'placeholder' | 'size'>> & {
    options: PromiseFunctionArray;
    optionProps?: {
        value: string;
        label: string;
        key?: string;
        disabled?: boolean;
    };
};
type RadioProp = FormItemTypeProp<'radio', OmitElementProp<InstanceType<typeof ElRadio>['$props'], 'modelValue' | 'label' | 'size'>> & {
    options: PromiseFunctionArray;
    optionProps?: {
        value: string;
        label: string;
        key?: string;
        disabled?: boolean;
    };
};
export type FormItemTypeProps = MultipleFormItemProp | SelectProp | RadioProp;
export type FormProps = OmitElementProp<InstanceType<typeof ElForm>['$props'], 'model'> & {
    spans?: Span | number;
    formItems: FormItemTypeProps[];
};
export declare const formProps: {
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    formProps: {
        type: PropType<FormProps>;
        default: () => {};
    };
};
/**
 * Promise｜Function|any[]
 */
type PromiseFunctionArray = Function | any[] | (() => Promise<any[]>);
export {};

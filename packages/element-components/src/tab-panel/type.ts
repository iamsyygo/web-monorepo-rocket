export type TabProps = {
    width?: number;
    height?: number;
    backgroundColor?: string;
    highlightBgColor?: string;
    highlightFontColor?: string;
    fontSize?: number;
    radius?: number;
    hoverBg?: string;

    append?: 'before' | 'after';
    // disabled?: boolean;

    tabs?: any[];
    props: {
        label?: string;
        key: string | number;
        icon?: string;
        disabled?: boolean;
    };

    modelValue?: string | number;
};

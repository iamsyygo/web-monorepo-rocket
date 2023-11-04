export type Menu = {
    name: string;
    path: string;
    icon: string;
    disabled?: boolean;
    children?: Menu[];
};

export type AsideProps = {
    asideWidth?: number;
    menus: Menu[];
    defaultMenuPathActive: string;
};

export type MenuProps = {
    menus: Menu[];
    defaultMenuPathActive?: string;
    collapse?: boolean;
};

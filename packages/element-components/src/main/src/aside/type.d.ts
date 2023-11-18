import { RouteLocationNormalizedLoaded } from 'vue-router';
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
    activeMenuKey: string;
    // collapse: false;
};

export type MenuProps = {
    menus: Menu[];
    defaultMenuPathActive?: string;
    collapse?: boolean;
};

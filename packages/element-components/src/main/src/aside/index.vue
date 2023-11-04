<template>
    <Menu :aside-width="asideWidth" :menus="menus" :default-menu-path-active="defaultMenuPathActive"></Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Menu from './Menu.vue';
import { AsideProps } from './type';

const { asideWidth = 200, menus = [], defaultMenuPathActive } = defineProps<AsideProps>();

const emits = defineEmits<{
    collapse: [width: number];
}>();

const miniMenuWidth = 64;
const diffWidth = asideWidth - miniMenuWidth;
const collapse = ref(false);
const onCollapse = () => {
    collapse.value = !collapse.value;
    const width = collapse.value ? miniMenuWidth : miniMenuWidth + diffWidth;
    emits('collapse', width);
};

// const handleMenuSelect = (path: string, indexPath, item, routePm) => {
//     // console.log(path, indexPath, item, routePm);
//     defaultMenuPathActive.value = path;
// };

// const defaultMenuPathActive = ref('');
// const pathname = location.pathname;
// // TODO 可能不存在当前路由，需要处理
// defaultMenuPathActive.value = pathname || '/';
</script>

<style scoped lang="scss">
.el-aside--custom.el-aside {
    .el-menu.el-menu--vertical {
        border-right: none;
        user-select: none;
        height: 100%;
    }
}
.base-menu--content {
    .el-sub-menu__title > .el-icon > span {
        font-style: normal;
    }
}

// 附加菜单element-plus收缩动画
.horizontal-collapse-transition {
    .el-menu-item > span:nth-child(2),
    .el-sub-menu__title > span {
        opacity: 0;
        transition: all 0.3s;
    }
}
</style>

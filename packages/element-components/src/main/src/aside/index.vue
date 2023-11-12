<template>
    <Menu
        :aside-width="asideWidth"
        :menus="menus"
        :default-menu-path-active="activeMenuKey"
        :collapse="collapse"
    ></Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Menu from './Menu.vue';
import { AsideProps } from './type';

const { asideWidth = 200, menus = [], activeMenuKey } = defineProps<AsideProps>();

const emits = defineEmits<{
    collapse: [width: number];
}>();

// 侧边栏收缩的宽度
const miniMenuWidth = 64;

// 侧边栏收缩，被 Aside 组件调用改变 option.asideWidth
const diffWidth = asideWidth - miniMenuWidth;
const collapse = ref(false);

// 侧边栏收缩
const onCollapse = () => {
    collapse.value = !collapse.value;
    const width = collapse.value ? miniMenuWidth : miniMenuWidth + diffWidth;
    emits('collapse', width);
};
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

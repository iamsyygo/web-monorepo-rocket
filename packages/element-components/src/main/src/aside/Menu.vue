<template>
    <ElMenu
        :default-active="defaultMenuPathActive"
        class="app-menu--content"
        :collapse="collapse"
        v-bind="$attrs"
        router
    >
        <MenuContent :menus="menus"></MenuContent>
    </ElMenu>
</template>

<script setup lang="ts">
import { ElMenu } from 'element-plus';
import MenuContent from './MenuContent.vue';
import { MenuProps } from './type';

const { menus = [], defaultMenuPathActive, collapse } = defineProps<MenuProps>();
</script>

<style lang="scss">
$--menu-radius: 4px;
.el-aside--custom.el-aside {
    & .el-sub-menu,
    & .el-menu-item {
        margin-bottom: 3px;
    }
    .el-menu.el-menu--vertical,
    .el-sub-menu .el-menu-item {
        --el-menu-item-height: 40px;
        --el-menu-sub-item-height: 40px;
        border-right: none;
        user-select: none;
    }

    .el-menu-item.is-active {
        background-color: var(--el-color-primary-light-7);
        border-radius: $--menu-radius;
    }
    .el-menu-item:hover,
    .el-sub-menu__title:hover {
        background-color: var(--el-color-primary-light-9);
        border-radius: $--menu-radius;
    }
}
.app-menu--content .el-sub-menu__title > .el-icon {
    & > span {
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

.el-popper:has(.el-menu--popup) {
    border: 0 !important;
    .el-menu-item {
        margin: 0 6px;
        height: 40px;
        border-radius: $--menu-radius;
        margin-bottom: 3px;
    }
    .el-menu-item.is-active {
        background-color: var(--el-color-primary-light-7);
    }
}
</style>

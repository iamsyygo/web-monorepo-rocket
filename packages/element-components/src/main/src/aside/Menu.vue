<template>
    <el-menu
        :default-active="defaultMenuPathActive"
        :collapse="collapse"
        class="base-menu--content"
        router
        v-bind="$attrs"
    >
        <MenuContent :menus="menus"></MenuContent>
    </el-menu>
</template>

<script setup lang="ts">
import { ElMenu } from 'element-plus';
import MenuContent from './MenuContent.vue';
import { MenuProps } from './type';

const { menus = [], defaultMenuPathActive, collapse } = defineProps<MenuProps>();
</script>

<style lang="scss">
.el-aside--custom.el-aside {
    .el-menu.el-menu--vertical {
        border-right: none;
        user-select: none;
        height: 100%;
    }
}
.base-menu--content .el-sub-menu__title > .el-icon {
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
</style>

<template>
    <template v-for="menu in menus" :key="menu.path">
        <el-sub-menu v-if="menu.children?.length" :index="menu.path">
            <template #title>
                <el-icon :size="iconSize"><symbol-icon :name="menu.icon"></symbol-icon></el-icon>
                <span class="menu-text--wrapper">{{ menu.name }}</span>
            </template>
            <MenuContent :menus="menu.children"></MenuContent>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path" :disabled="menu.disabled">
            <el-icon :size="iconSize"><symbol-icon :name="menu.icon"></symbol-icon></el-icon>
            <template #title>
                <span class="menu-text--wrapper">{{ menu.name }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import { ElMenuItem, ElSubMenu, ElIcon } from 'element-plus';
import { Menu } from './type';
import SymbolIcon from '../../../symbol-icon';

defineOptions({
    name: 'MenuContent',
});

const { menus } = defineProps<{
    menus: Menu[];
}>();

const iconSize = 18;
</script>
<style lang="scss" scoped>
.menu-text--wrapper {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.el-popper .menu-text--wrapper {
    display: block;
}
</style>

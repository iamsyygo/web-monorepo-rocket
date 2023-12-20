<template>
    <template v-for="menu in menus" :key="menu.path">
        <el-sub-menu v-if="menu.children?.length" :index="menu.path">
            <template #title>
                <el-icon :size="iconSize"><symbol-icon :name="menu.icon"></symbol-icon></el-icon>
                <span>{{ menu.name }}</span>
            </template>
            <MenuContent :menus="menu.children"></MenuContent>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path" :disabled="menu.disabled">
            <el-icon :size="iconSize"><symbol-icon :name="menu.icon"></symbol-icon></el-icon>
            <template #title>
                <span>{{ menu.name }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import { ElMenuItem, ElSubMenu, ElIcon } from 'element-plus';
import { Menu } from './type';
import SymbolIcon from '@/symbol-icon';

defineOptions({
    name: 'MenuContent',
});

const { menus } = defineProps<{
    menus: Menu[];
}>();

const iconSize = 18;
</script>
<style>
.el-menu-item.is-active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 5px;
    background-color: var(--el-color-primary);
    border-radius: 0 4px 4px 0;
    animation: menu-item-enter 0.6s;
}
@keyframes menu-item-enter {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>

<template>
    <Menu
        :aside-width="asideWidth"
        :menus="menus"
        :default-menu-path-active="activeMenuKey"
        :collapse="collapse"
    ></Menu>
    <el-icon class="toggle-collapse--icon" :size="12" @click="onCollapse">
        <ArrowRightBold v-if="collapse" />
        <ArrowLeftBold v-else />
    </el-icon>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElIcon } from 'element-plus';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
import Menu from './Menu.vue';
import { AsideProps } from './type';

const { asideWidth = 200, menus = [], activeMenuKey } = defineProps<AsideProps>();

const emits = defineEmits<{
    collapse: [width: number];
}>();

// 侧边栏收缩的宽度
const miniMenuWidth = 58;

// 侧边栏收缩，被 Aside 组件调用改变 option.asideWidth
let diffWidth = asideWidth - miniMenuWidth;
const collapse = ref(false);

// 侧边栏收缩
const onCollapse = () => {
    collapse.value = !collapse.value;
    if (collapse.value) {
        diffWidth = asideWidth - miniMenuWidth;
    }
    const width = collapse.value ? miniMenuWidth : miniMenuWidth + diffWidth;
    emits('collapse', width);
};

defineExpose({
    collapse,
    onCollapse,
});
</script>

<style scoped lang="scss">
.el-menu.el-menu--vertical {
    border-right: none;
    user-select: none;
    height: 100%;
}

.app-menu--content {
    overflow-y: scroll;
    .el-sub-menu__title > .el-icon > span {
        font-style: normal;
    }
}

.toggle-collapse--icon {
    cursor: pointer;
    position: absolute;
    right: -8px;
    bottom: 10%;
    width: 18px;
    height: 18px;
    color: #fff;
    background-color: var(--el-color-primary-light-5);
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--el-color-primary-light-3);
        transform: scale(1.1);
    }
}
</style>

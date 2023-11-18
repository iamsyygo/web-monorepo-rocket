<template>
    <Menu
        :aside-width="asideWidth"
        :menus="menus"
        :default-menu-path-active="activeMenuKey"
        :collapse="collapse"
    ></Menu>
    <!-- <div :class="['toggle-collapse', collapse ? 'collapse' : '']" @click="onCollapse">
        <div class="toggle-collapse--one"></div>
        <div class="toggle-collapse--two"></div>
    </div> -->
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
/* 
@mixin toggle-m($w) {
    width: 6px;
    height: 20px;
    border-radius: 2px;
    background-color: var(--el-color-info-light-7);
    transform: translateY($w);
    transition: all 0.3s;
}

@mixin toggle-t($r, $w) {
    background-color: var(--el-color-primary);
    transform: rotate($r) translateY($w);
}

.toggle-collapse {
    cursor: pointer;
    position: absolute;
    right: 0;
    bottom: 5%;
    display: flex;
    flex-direction: column;
    transform: translateX(-5px);

    &:hover {
        .toggle-collapse--one {
            @include toggle-t(25deg, 3px);
        }
        .toggle-collapse--two {
            @include toggle-t(-25deg, -3px);
        }
    }
    &.collapse:hover {
        .toggle-collapse--one {
            @include toggle-t(-25deg, 3px);
        }
        .toggle-collapse--two {
            @include toggle-t(25deg, -3px);
        }
    }

    &--one {
        @include toggle-m(5px);
    }
    &--two {
        @include toggle-m(-5px);
    }
} */
</style>

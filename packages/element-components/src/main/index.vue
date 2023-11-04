<template>
    <BaseArchitecture :option="option">
        <template #header>
            <Header></Header>
        </template>
        <template #aside>
            <Aside
                :aside-width="option.asideWidth"
                :menus="menus"
                :activeMenuKey="route.path"
                @collapse="handleMenuCollapse"
            ></Aside>
        </template>
        <template #main>
            <Main :route="route" @click-tab="handleTabClick" @remove-tab="handleTabRemove"></Main>
        </template>
    </BaseArchitecture>
</template>

<script setup lang="ts">
import { Tab } from '@/tab-panel/index.vue';
import { computed, ref } from 'vue';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';
import BaseArchitecture from '../base-architecture';
import { ArchitectureOption } from '../base-architecture/index.vue';
import Header from './src/Header.vue';
import Main from './src/Main.vue';
import Aside from './src/aside/index.vue';
import { AsideProps } from './src/aside/type';
// import '../css/base-architecture.css';

const { menus, router } = defineProps<{
    menus: AsideProps['menus'];
    router: Router;
}>();

// 获取当前路由
const route = computed<RouteLocationNormalizedLoaded>(() => {
    return router.currentRoute.value;
});

// 布局配置
const option = ref<ArchitectureOption>({
    asideWidth: 200,
    headerHeight: 60,
    typography: 'ham',
    headerStyle: {
        background: 'linear-gradient(90deg, #102EFF 0%, #53A8FF 100%)',
        boxShadow: '0 1px 4px rgba(0, 21, 41, .08)',
    },
    asideStyle: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0, 21, 41, .08)',
    },
});

// 侧边栏收缩，被 Aside 组件调用改变 option.asideWidth
const handleMenuCollapse = (width: number) => {
    option.value.asideWidth = width;
};

// 点击 tab 页签，被 Main 组件调用
const handleTabClick = (e: MouseEvent, tab: Tab, index: number) => {
    router.push(tab.key);
};
const handleTabRemove = (lastKey: string, tab: Tab, index: number) => {
    router.push(lastKey);
};
</script>

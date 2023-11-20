<template>
    <ElConfigProvider :locale="zhCn" size="default">
        <AppArchitecture :option="option">
            <template #header>
                <Header @palette="openPalette">
                    <template #left>
                        <slot name="head-left"></slot>
                    </template>
                    <template #center>
                        <slot name="head-center"></slot>
                    </template>
                    <template #right>
                        <slot name="head-right"></slot>
                    </template>
                </Header>
            </template>
            <template #aside>
                <Aside
                    ref="aside"
                    :aside-width="option.asideWidth"
                    :menus="menus"
                    :activeMenuKey="route.path"
                    @collapse="handleMenuCollapse"
                ></Aside>
            </template>
            <template #main>
                <Main :route="route" @click-tab="handleTabClick" @remove-tab="handleTabRemove"></Main>
            </template>
        </AppArchitecture>
        <ElDrawer title="系统设置" v-model="visibleDrawer" direction="rtl" size="30%">
            <ThemeSetting v-model:system-option="option" @close="visibleDrawer = false"></ThemeSetting>
        </ElDrawer>
    </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider, ElDrawer } from 'element-plus';
import 'element-plus/theme-chalk/el-drawer.css';
import { handleElementTheme } from '@aoe/utils';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { Tab } from '@/tab-panel/index.vue';
import { computed, onBeforeMount, ref, watch } from 'vue';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';
import AppArchitecture from '../base-architecture';
import { ArchitectureOption } from '../base-architecture/index.vue';
import Header from './src/header/index.vue';
import Main from './src/Main.vue';
import Aside from './src/aside/index.vue';
import { AsideProps } from './src/aside/type';
import ThemeSetting from './src/ThemeSetting.vue';

const aside = ref<InstanceType<typeof Aside>>();

onBeforeMount(() => {
    const AppOptions = JSON.parse(localStorage.getItem('AppOptions') || '{}');
    if (AppOptions) {
        // option.value = AppOptions as ArchitectureOption;
        Object.assign(option.value, AppOptions);
    }
});

const { menus, router } = defineProps<{
    menus: AsideProps['menus'];
    router: Router;
}>();

const visibleDrawer = ref(false);
const openPalette = () => {
    // 菜单需要展开
    if (aside.value?.collapse) {
        aside.value.onCollapse();
    }
    visibleDrawer.value = true;
};

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
    primary: '#4482F1',
    effect: 'dark',
});

// 侧边栏收缩，被 Aside 组件调用改变 option.asideWidth
const handleMenuCollapse = (width: number) => {
    option.value.asideWidth = width;
};

// 点击 tab 页签，被 Main 组件调用
const handleTabClick = (_e: MouseEvent, tab: Tab, _index: number) => {
    router.push(tab.key);
};
const handleTabRemove = (lastKey: string, _tab: Tab, _index: number) => {
    router.push(lastKey);
};

watch(
    () => option.value.primary,
    (val) => {
        const colors = handleElementTheme(val);
        const varStyle = Object.entries(colors)
            .map(([key, value]) => {
                return `${key}: ${value};`;
            })
            .join('\n');

        const innerStyle = `:root{
${varStyle}
}`;
        const hasAppElementTheme = document.getElementById('app-element-theme');
        if (hasAppElementTheme) {
            hasAppElementTheme.innerHTML = innerStyle;
            return;
        }
        const style = document.createElement('style');
        style.id = `app-element-theme`;
        style.innerHTML = innerStyle;
        document.body.appendChild(style);
    },
);
</script>

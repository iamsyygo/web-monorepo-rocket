<template>
    <BaseArchitecture :option="option">
        <template #header>
            <Header></Header>
        </template>
        <template #aside>
            <Aside
                :aside-width="option.asideWidth"
                :menus="menus"
                :default-menu-path-active="defaultMenuPathActive"
                @collapse="handleMenuCollapse"
            ></Aside>
        </template>
        <template #main>
            <Main :route="route" @click-tab="handleTabClick"></Main>
        </template>
    </BaseArchitecture>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseArchitecture from '../base-architecture';
import { ArchitectureOption } from '../base-architecture/index.vue';
import Main from './src/Main.vue';
import Header from './src/Header.vue';
import Aside from './src/aside/index.vue';
import { AsideProps } from './src/aside/type';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { Tab } from '@/tab-panel/index.vue';
// import '../css/base-architecture.css';

const { menus, route } = defineProps<{
    menus: AsideProps['menus'];
    route: RouteLocationNormalizedLoaded;
}>();
const defaultMenuPathActive = ref<string>('');
defaultMenuPathActive.value = route.path;

const option = ref<ArchitectureOption>({
    asideWidth: 200,
    headerHeight: 60,
    typography: 'ham',
    headerStyle: {
        backgroundColor: '#c6c6c6',
        boxShadow: '0 1px 4px rgba(0, 21, 41, .08)',
    },
    asideStyle: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0, 21, 41, .08)',
    },
});

const handleMenuCollapse = (width: number) => {
    option.value.asideWidth = width;
};
const handleTabClick = (e: MouseEvent, tab: Tab, index: number) => {
    defaultMenuPathActive.value = tab.key;
};
</script>

<style scoped></style>

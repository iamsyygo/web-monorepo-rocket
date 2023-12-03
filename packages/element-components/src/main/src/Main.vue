<template>
    <div class="app-main--wrapper">
        <TabPanelPro
            v-model:tabs="tabs"
            v-model="activeTabValue"
            :props="tabProps"
            :height="25"
            background-color="var(--el-color-primary-light-7)"
            :highlight-bg-color="backgroundColor"
            @click="handleTabClick"
            @tab-change="handlTabChange"
        ></TabPanelPro>
        <div class="main-content--box">
            <router-view v-slot="{ Component, route }">
                <Transition mode="out-in" name="app-view--transition">
                    <!-- TODO 不是缓存10个，是缓存tab栏10个 -->
                    <keep-alive :max="10" :include="include">
                        <component :is="Component" :key="route.fullPath"></component>
                    </keep-alive>
                </Transition>
            </router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import TabPanelPro from '@/tab-panel/tab-panel-pro.vue';
import { Tab } from '@/tab-panel/index.vue';

export type Tabs = Tab[];

const { backgroundColor = '#F5F7FA', route } = defineProps<{
    route: RouteLocationNormalizedLoaded;
    backgroundColor?: string;
}>();

const emits = defineEmits<{
    'click-tab': [e: MouseEvent, tab: Tab];
    'tab-change': [key: string, tab: Tab];
}>();

const tabs = ref<Tab[]>([]);
const tabProps = {
    label: 'label',
    key: 'key',
    icon: 'icon',
};
const activeTabValue = ref<string>('');

const include = computed(() => {
    return tabs.value.map((tab) => tab.name);
});

const handleTabClick = (e: MouseEvent, tab: any) => {
    emits('click-tab', e, tab);
};

const handlTabChange = (key: string, tab: any) => {
    // console.log(key, tab, 111);
    emits('tab-change', key, tab);
};

watch(
    () => route.path,
    (path) => {
        activeTabValue.value = path;

        const hasRoute = tabs.value.some((tab) => tab.key === path);
        if (hasRoute) return;

        tabs.value.push({
            label: (route.meta.name || route.meta.title || '') as string,
            key: path,
            icon: (route.meta.icon || '') as string,
            name: route.name as string,
        });
    },
    {
        immediate: true,
    },
);
</script>

<style lang="scss" scoped>
.app-main--wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.main-content--box {
    box-sizing: border-box;
    height: calc(100% - 35px);
    flex: 1;
    padding: 10px 10px 0;
    background-color: v-bind(backgroundColor);
}

.app-view--transition-enter-active,
.app-view--transition-leave-active {
    transition: all 0.3s;
}

.app-view--transition-enter-from,
.app-view--transition-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

.app-view--transition-enter-to,
.app-view--transition-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>

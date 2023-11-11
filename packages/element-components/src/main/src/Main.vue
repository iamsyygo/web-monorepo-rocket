<template>
    <div class="base-main--wrapper">
        <TabPanel
            ref="tabPanelRef"
            class="main-tabs--box"
            :tabs="tabs"
            @click="handleTabClick"
            @remove="emits('remove-tab', activeTabIndex, $event.tab, $event.index)"
            v-model="activeTabIndex"
            insert-to-after
        >
        </TabPanel>
        <div class="main-content--box">
            <router-view v-slot="{ Component, route }">
                <Transition mode="out-in" name="base-view--transition">
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
import { ref, shallowRef, watch } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import TabPanel from '../../tab-panel';
import { Tab } from '../../tab-panel/index.vue';

export type Tabs = Tab[];

const { backgroundColor = '#fff', route } = defineProps<{
    // tabs: Tab[];
    route: RouteLocationNormalizedLoaded;
    backgroundColor?: string;
}>();

const emits = defineEmits<{
    'click-tab': [e: MouseEvent, tab: Tab, index: number];
    'remove-tab': [lastKey: string, tab: Tab, index: number];
}>();
const handleTabClick = (e: MouseEvent, tab: Tab, index: number) => {
    emits('click-tab', e, tab, index);
};

const include = ref<string[]>([]);
const tabs = ref<Tab[]>([]);
const activeTabIndex = ref<string>('');

activeTabIndex.value = route.path;
tabs.value.push({
    label: (route.meta.title || '') as string,
    key: route.path,
    icon: (route.meta.icon || '') as string,
});

const tabPanelRef = shallowRef<InstanceType<typeof TabPanel> | null>();
watch(
    () => route.path,
    (path) => {
        tabPanelRef.value?.addTab({
            label: (route.meta.title || '') as string,
            key: path,
            icon: (route.meta.icon || '') as string,
        });
        activeTabIndex.value = path;
    },
);
</script>

<style lang="scss" scoped>
.base-main--wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.main-tabs--box {
    height: 35px;
    width: 100%;
}
.main-content--box {
    flex: 1;
    padding: 10px 10px 0;
    background-color: v-bind(backgroundColor);
}

.base-view--transition-enter-active,
.base-view--transition-leave-active {
    transition: all 0.3s;
}

.base-view--transition-enter-from,
.base-view--transition-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

.base-view--transition-enter-to,
.base-view--transition-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>

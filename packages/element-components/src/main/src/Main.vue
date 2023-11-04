<template>
    <div class="base-main--wrapper">
        <TabPanel
            ref="tabPanelRef"
            class="main-tabs--box"
            :tabs="tabs"
            @click="handleTabClick"
            v-model="activeTabIndex"
            insert-to-after
        >
        </TabPanel>
        <div class="main-content--box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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
}>();
const handleTabClick = (e: MouseEvent, tab: Tab, index: number) => {
    emits('click-tab', e, tab, index);
};

const tabs = ref<Tab[]>([]);
const activeTabIndex = ref<string | number>('');

activeTabIndex.value = route.path;
tabs.value.push({
    // @ts-expect-error
    label: route.meta.title,
    key: route.path,
    icon: route.meta.icon,
});

const tabPanelRef = ref<InstanceType<typeof TabPanel> | null>();
watch(
    () => route.path,
    (path) => {
        tabPanelRef.value?.addTab({
            // @ts-expect-error
            label: route.meta.title,
            key: path,
            icon: route.meta.icon,
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
    padding: 10px;
    background-color: v-bind(backgroundColor);
}
</style>

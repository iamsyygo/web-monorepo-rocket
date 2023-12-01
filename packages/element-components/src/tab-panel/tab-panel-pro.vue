<template>
    <div class="tab-wrapper">
        <VueDraggable
            v-model="modelTabs"
            @start="onDraggedStart"
            @end="onDraggedEnd"
            class="tab-draggable"
            :item-key="(props.props['key'] as string)"
            :animation="200"
        >
            <template #item="{ element, index }">
                <div
                    @click="(e) => handleClick(e, element)"
                    @contextmenu.prevent.stop="(e) => handleContextMenu(e, element, index)"
                    :class="{
                        'tab-item-ctn': true,
                        active: element[props.props['key']] === props.modelValue,
                    }"
                    :ref="(e) => itemRef(element[props.props['key']] === props.modelValue, index, e)"
                >
                    <template v-if="element[props.props['key']] === props.modelValue"> </template>
                    <div class="tab-icon">
                        <el-icon :size="14"><symbol-icon name="aoe-npm"></symbol-icon></el-icon>
                    </div>
                    <div class="tab-label">
                        {{ element[props.props.label!] }}
                    </div>
                    <div class="tab-close" @click.stop.prevent="onClosed(index)" v-if="modelTabs?.length !== 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                            <line x1="0" y1="0" x2="8" y2="8" stroke="black" stroke-width="1" />
                            <line x1="0" y1="8" x2="8" y2="0" stroke="black" stroke-width="1" />
                        </svg>
                    </div>
                </div>
            </template>
        </VueDraggable>

        <div class="tab-item-ctn-active" ref="tabRef">
            <svg class="tab-radius-before" width="7" height="7">
                <path d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z"></path>
            </svg>
            <svg class="tab-radius-after" width="7" height="7">
                <path d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z"></path>
            </svg>
        </div>
    </div>
    <PopoverMenu ref="popoverMenu">
        <ul class="tab-popover-menu">
            <li
                v-for="item in dropdownItems"
                :key="item.value"
                :class="{ 'el-dropdown-menu__item': true, 'is-disabled': modelTabs?.length === 1 }"
                @click="handleMenuClick(item.value)"
            >
                <el-icon :size="14"><symbol-icon :name="item.icon"></symbol-icon></el-icon>
                <span>{{ item.label }}</span>
            </li>
        </ul>
    </PopoverMenu>
</template>
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import 'element-plus/theme-chalk/el-dropdown-menu.css';
// import { vAutoAnimate } from '@formkit/auto-animate/vue';
import VueDraggable from 'vuedraggable/src/vuedraggable';

import { dropdownItems } from './config';
import SymbolIcon from '../symbol-icon';
import PopoverMenu from './popover-menu.vue';
import { TabProps } from './type';
import { onMounted, ref } from 'vue';
const props = withDefaults(defineProps<TabProps>(), {
    height: 30,
    width: 180,
    backgroundColor: 'var(--el-color-primary-light-7)',
    highlightBgColor: '#fff',
    radius: 8,
    fontSize: 14,
    hoverBg: 'var(--el-color-primary-light-3)',
});
const modelValue = defineModel<string | number>({
    required: true,
    // local: false,
});
const modelTabs = defineModel<Record<string, unknown>[]>('tabs', {
    local: false,
});
const emits = defineEmits<{
    contextmenu: [MouseEvent, Record<string, unknown>];
    click: [MouseEvent, Record<string, unknown>];
}>();

// const autoAnimateOption = {
//     easing: 'ease-in-out',
//     duration: 300,
//     disrespectUserMotionPreference: true,
// };

const handleClick = (e: MouseEvent, tab: Record<string, unknown>) => {
    e.stopPropagation();
    modelValue.value = tab[props.props['key']] as string | number;
    emits('click', e, tab);
};

const popoverMenu = ref<typeof PopoverMenu>();
let currentTab: Record<string, unknown> | null = null;
let currentIndex = 0;
const handleContextMenu = (e: MouseEvent, tab: Record<string, unknown>, i: number) => {
    currentTab = tab;
    currentIndex = i;
    // console.log(e.currentTarget);

    // e.stopPropagation();
    // popoverMenu.value!.show(e.target);

    // 拿到当前绑定事件的元素而不是触发事件的元素
    popoverMenu.value!.show(e.currentTarget);
    emits('contextmenu', e, tab);
};
const handleMenuClick = (cmd: (typeof dropdownItems)[number]['value']) => {
    if (modelTabs.value?.length === 1) return;
    switch (cmd) {
        case 'close':
            onClosed(currentIndex);
            break;
        case 'close-rest':
            // const item = modelTabs.value?.[currentIndex];
            // modelTabs.value = [item!]; // ? 为什么不行
            modelTabs.value?.splice(currentIndex + 1);
            modelTabs.value?.splice(0, currentIndex);
            modelValue.value = modelTabs.value?.[0][props.props['key']] as string | number;

            break;
        case 'close-left':
            if (currentIndex == 0) break;
            modelTabs.value?.splice(0, currentIndex);
            modelValue.value = modelTabs.value?.[0][props.props['key']] as string | number;
            break;
        case 'close-right':
            modelTabs.value?.splice(currentIndex + 1);
            modelValue.value = modelTabs.value?.[currentIndex][props.props['key']] as string | number;
            break;
    }
};

const onClosed = (i: number) => {
    if (modelTabs.value?.length === 1) return;
    const closeKey = modelTabs.value?.[i][props.props['key']] as string | number;
    modelTabs.value?.splice(i, 1);

    if (closeKey !== modelValue.value) {
        return;
    }

    const acKey = modelTabs.value?.[i - 1][props.props['key']] as string | number;
    modelValue.value = acKey;
};

const tabRef = ref<HTMLDivElement | null>();
const itemRef = (bool: boolean, i: number, _e: HTMLDivElement) => {
    if (bool && i < modelTabs.value!.length) {
        console.log(modelValue.value, i, modelTabs.value);
        // 10px 左内边距
        let offsetX = 7;
        const gap = 5;
        // const rect = e.getBoundingClientRect();
        if (tabRef.value) {
            offsetX = offsetX + (gap + props.width) * i;
            tabRef.value.style.left = offsetX + 'px';
        }
    }
    // if (modelTabs.value) {
    //     modelTabs.value[i].HTMLElement = e;
    // }
};

onMounted(() => {
    // addEventListener('resize'） 不会生效
    // window.onresize = () => {
    // };
});

const onDraggedStart = () => {
    // 使用 dragged 就无法使用 autoAnimate
    // autoAnimateOption.duration = 0;
    tabRef.value!.style.opacity = '0';
};
const onDraggedEnd = () => {
    // autoAnimateOption.duration = 300;
    tabRef.value!.style.opacity = '1';
};
</script>
<style scoped lang="scss">
$--tab-width: calc(v-bind('props.width') * 1px);
$--tab-radius: calc(v-bind('props.radius') * 1px);
$--tab-active-bg: v-bind('props.highlightBgColor');
$--tabs-bg: v-bind('props.backgroundColor');

.tab-wrapper {
    position: relative;
    width: 100%;
    height: calc(v-bind('props.height') * 1px);
    padding: 5px 7px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: $--tabs-bg;
}
.tab-draggable {
    position: relative;
    width: 100%;
    height: calc(v-bind('props.height') * 1px);
    display: flex;
    align-items: center;
    gap: 5px;
}

.tab-item-ctn {
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    position: relative;
    z-index: 99;
    display: flex;
    align-items: center;
    gap: 6px;
    width: $--tab-width;
    min-width: $--tab-width;
    height: 100%;
    padding: 0 10px;
    border-radius: $--tab-radius;

    .tab-icon {
        position: relative;
        width: 14px;
        height: 14px;
        line-height: 14px;
    }
    .tab-label {
        flex: 1;
        font-size: calc(v-bind('props.fontSize') * 1px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.tab-item-ctn::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -3px;
    width: 1px;
    height: 60%;
    transform: translateY(-30%);
    background-color: #c0c0c0;
}

.tab-item-ctn-active {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.175);
    width: $--tab-width;
    min-width: $--tab-width;
    height: calc(v-bind('props.height') * 1px);
    position: absolute;
    border-top-left-radius: $--tab-radius;
    border-top-right-radius: $--tab-radius;
    background-color: $--tab-active-bg;
    .tab-radius-before {
        position: absolute;
        bottom: -5px;
        left: 0;
        transform: translateX(-100%);
        fill: $--tab-active-bg;
    }
    .tab-radius-after {
        position: absolute;
        bottom: -5px;
        right: 0;
        transform: translateX(100%);
        fill: $--tab-active-bg;
    }
    &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: $--tab-active-bg;
    }
}

.tab-close {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    &:hover {
        background-color: #dbdbdb;
    }
}
.tab-close svg {
    stroke-width: 1.8px;
}

.tab-item-ctn:not(.active):hover {
    z-index: 0;
    transition: all 0.6s;
    background-color: v-bind('props.hoverBg');
}

.tab-popover-menu {
    margin: 0;
    padding: 5px;
}
.tab-popover-menu > .el-dropdown-menu__item {
    padding: 5px 16px 5px 5px;
    transition: all 0.3s;
    border-radius: 3px;
    height: 16px;
    &:hover {
        background-color: var(--el-color-primary-light-7);
        color: var(--el-color-primary);
    }
}
</style>
<style>
.popper-meun {
    border: 0;
    padding: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}
</style>

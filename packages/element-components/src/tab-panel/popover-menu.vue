<template>
    <div v-click-outside="onClickOutside">
        <el-tooltip
            v-model:visible="visible"
            placement="bottom"
            effect="light"
            trigger="click"
            transition="popper-meun-fade"
            virtual-triggering
            :virtual-ref="triggerRef"
            popper-class="popper-meun"
        >
            <template #content>
                <slot></slot>
            </template>
        </el-tooltip>
    </div>
</template>

<script setup lang="ts">
import { ElTooltip, ClickOutside as vClickOutside } from 'element-plus';
import { ref } from 'vue';

const visible = ref(false);
const triggerRef = ref({
    getBoundingClientRect() {
        return domRect.value!;
    },
});

let trigger: HTMLElement | null = null;
const onClickOutside = () => {
    if (trigger) {
        trigger = null;
        return;
    }
    visible.value = false;
};

const domRect = ref<DOMRect>();

const show = (el: HTMLElement) => {
    trigger = el;
    domRect.value = el.getBoundingClientRect();
    visible.value = true;
};

defineExpose({ show });
</script>
<style scoped lang="scss">
/* .popper-meun-fade-enter-active,
.popper-meun-fade-leave-active {
    transition: opacity 0.3s;
}

.popper-meun-fade-enter-from,
.popper-meun-fade-leave-to {
    opacity: 0;
}

.popper-meun-fade-enter-to,
.popper-meun-fade-leave-from {
    opacity: 1;
} */
</style>

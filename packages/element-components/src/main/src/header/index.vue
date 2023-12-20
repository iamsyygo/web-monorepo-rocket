<template>
    <div class="app-header--wrapper">
        <div class="app-header--left">
            <slot name="left"></slot>
        </div>
        <div class="app-header--center">
            <slot name="center"></slot>
        </div>
        <div class="app-header--right">
            <slot name="right"> </slot>
        </div>
    </div>
    <div class="system-app-setup" @click="emits('palette')">
        <ElIcon :size="iconSize">
            <PaletteSvg></PaletteSvg>
        </ElIcon>
    </div>
</template>
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import PaletteSvg from './palette.vue';

const iconSize = 18;
const emits = defineEmits<{
    palette: [];
}>();
</script>

<style scoped>
.app-header--wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.system-app-setup {
    cursor: pointer;
    position: fixed;
    right: -20px;
    bottom: 30%;
    width: 30px;
    height: 30px;
    z-index: 999;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    background-image: linear-gradient(45deg, var(--el-color-primary-light-5) 60%, #f3f3f3 100%);
    transition: all 0.3s;
    &:hover {
        transform: translateX(-15px);
    }
}
.app-header--right {
    display: flex;
    align-items: center;
}
</style>

<template>
    <div class="app-header--wrapper">
        <div class="app-header--left">
            <slot name="left"></slot>
        </div>
        <div class="app-header--center">
            <slot name="center"></slot>
        </div>
        <div class="app-header--right">
            <slot name="right"></slot>
            <div class="system-header--btn">
                <ElIcon :size="iconSize" @click="emits('palette')">
                    <PaletteSvg></PaletteSvg>
                </ElIcon>
                <ElIcon :size="iconSize">
                    <ShezhiSvg></ShezhiSvg>
                </ElIcon>
            </div>
        </div>
    </div>
</template>
` `
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import PaletteSvg from './palette.vue';
import ShezhiSvg from './shezhi.vue';

const emits = defineEmits<{
    palette: [];
}>();

const iconSize = 18;
</script>

<style scoped>
.app-header--wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: linear-gradient(90deg, #102eff 0%, #53a8ff 100%);
}

.system-header--btn {
    margin-right: 10px;
    padding: 0 10px;
    .el-icon {
        margin-left: 10px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    .el-icon:hover {
        transform: scale(1.2);
    }
}
</style>

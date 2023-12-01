<template>
    <div class="app-header--wrapper">
        <div class="app-header--left">
            <slot name="left"></slot>
        </div>
        <div class="app-header--center">
            <slot name="center"></slot>
        </div>
        <div class="app-header--right">
            <slot name="right">
                <ElButton type="default" text>
                    <ElIcon :size="22" style="margin-right: 8px">
                        <User></User>
                    </ElIcon>
                    {{ appConfig.user.username || '未命名' }}
                </ElButton>
            </slot>
            <div class="system-header--btn">
                <ElIcon :size="iconSize">
                    <ShezhiSvg></ShezhiSvg>
                </ElIcon>
            </div>
        </div>
    </div>
    <div class="system-app-setup" @click="emits('palette')">
        <ElIcon :size="iconSize">
            <PaletteSvg></PaletteSvg>
        </ElIcon>
    </div>
</template>
<script setup lang="ts">
import { ElIcon, ElButton } from 'element-plus';
import PaletteSvg from './palette.vue';
import ShezhiSvg from './shezhi.vue';
import User from './user.vue';
import { reactive } from 'vue';

const emits = defineEmits<{
    palette: [];
}>();

const iconSize = 18;

const appConfig = reactive(JSON.parse(localStorage.getItem('SystemAppConfig') || '{}'));
console.log(appConfig);
</script>

<style scoped>
.app-header--wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /* background: linear-gradient(90deg, #102eff 0%, #53a8ff 100%); */
}

.system-header--btn {
    display: flex;
    justify-content: center;
    align-items: center;
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

<template>
    <Transition name="app" appear>
        <div :class="`system-app-architecture--${option.typography}`">
            <el-header class="el-header--custom" :style="{ ...option.headerStyle, height: option.headerHeight }">
                <slot name="header"> </slot>
            </el-header>
            <el-container>
                <el-aside class="el-aside--custom" :style="{ ...option.asideStyle, width: option.asideWidth }">
                    <slot name="aside"></slot>
                </el-aside>
                <el-main class="el-main--custom"> <slot name="main"></slot> </el-main>
            </el-container>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { ElAside, ElContainer, ElHeader, ElMain } from 'element-plus';
import { Transition } from 'vue';
export interface ArchitectureOption {
    headerHeight: number;
    asideWidth: number;
    /**
     * ham: header aside main
     * ahm: aside header main
     * hm: header main
     * am: aside main
     */
    typography: 'ham' | 'ahm' | 'hm' | 'am';
    headerStyle?: Partial<CSSStyleDeclaration>;
    asideStyle?: Partial<CSSStyleDeclaration>;
    primary: string;
    effect?: 'light' | 'dark';
}

const { option = { headerHeight: 60, asideWidth: 200, typography: 'ham' } } = defineProps<{
    option: ArchitectureOption;
}>();
</script>
<style scoped lang="scss">
$--header-height: calc(v-bind('option.headerHeight') * 1px);
$--aside-width: calc(v-bind('option.asideWidth') * 1px);

.system-app-architecture--ham,
.system-app-architecture--ahm,
.system-app-architecture--hm,
.system-app-architecture--am {
    position: relative;
    width: 100%;
    height: 100%;
}
.system-app-architecture--ham > .el-container,
.system-app-architecture--ahm > .el-container,
.system-app-architecture--hm > .el-container {
    height: calc(100% - #{$--header-height});
}
.system-app-architecture--am > .el-container {
    height: 100%;
}

.el-header--custom,
.el-aside--custom,
.el-main--custom {
    position: relative;
    padding: 0;
    transition: all 0.3s;
}

.el-aside--custom.el-aside {
    --el-menu-base-level-padding: 10px;
    position: relative;
    box-sizing: border-box;
    padding: 6px;
    border-right: 1px solid #ebeef5;
}

.el-aside--custom {
    z-index: 999;
    overflow: visible;
    /* overflow-y: scroll; */
}

.system-app-architecture--ham {
    .el-header--custom {
        width: 100%;
        height: $--header-height;
    }

    .el-aside--custom {
        width: $--aside-width;
        height: 100%;
    }

    .el-main--custom {
        width: calc(100% - #{$--aside-width});
        height: 100%;
    }
}

.system-app-architecture--ahm {
    .el-header--custom {
        transform: translateX($--aside-width);
        width: calc(100% - #{$--aside-width});
        height: $--header-height;
    }

    .el-aside--custom {
        transform: translateY(calc(v-bind('option.headerHeight') * -1px));
        width: $--aside-width;
        height: calc(100% + #{$--header-height});
    }

    .el-main--custom {
        width: calc(100% - #{$--aside-width});
        height: 100%;
    }
}

.system-app-architecture--hm {
    .el-header--custom {
        width: 100%;
        height: $--header-height;
    }

    .el-main--custom {
        width: 100%;
        height: 100%;
    }

    .el-aside--custom {
        width: 0;
        padding: 6px 0;
        overflow: hidden;
    }
}

.system-app-architecture--am {
    .el-aside--custom {
        width: $--aside-width;
        height: 100%;
    }

    .el-main--custom {
        width: 100%;

        height: 100%;
    }

    .el-header--custom {
        height: 0;
        overflow: hidden;
    }
}

.app-enter-active,
.app-leave-active {
    transition: all 0.5s;
}

.app-enter-from,
.app-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

.app-enter-to,
.app-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>

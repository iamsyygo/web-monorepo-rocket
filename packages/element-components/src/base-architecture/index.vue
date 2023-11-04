<template>
    <div :class="`system-base-architecture--${option.typography}`">
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
</template>

<script lang="ts" setup>
import { ElAside, ElContainer, ElHeader, ElMain } from 'element-plus';
// import 'element-plus/theme-chalk/el-container.css';
import { watch } from 'vue';
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
}

const { option = { headerHeight: 60, asideWidth: 200, typography: 'ham' } } = defineProps<{
    option: ArchitectureOption;
}>();

watch(
    () => option,
    (val) => {
        localStorage.setItem('layout-option', JSON.stringify(val));
    },
);
</script>
<style scoped lang="scss">
$--header-height: calc(v-bind('option.headerHeight') * 1px);
$--aside-width: calc(v-bind('option.asideWidth') * 1px);

.system-base-architecture--ham,
.system-base-architecture--ahm,
.system-base-architecture--hm,
.system-base-architecture--am {
    position: relative;
    width: 100%;
    height: 100%;
}
.system-base-architecture--ham > .el-container,
.system-base-architecture--ahm > .el-container,
.system-base-architecture--hm > .el-container {
    height: calc(100% - #{$--header-height});
}
.system-base-architecture--am > .el-container {
    height: 100%;
}

.el-header--custom,
.el-aside--custom,
.el-main--custom {
    position: relative;
    padding: 0;
    transition: all 0.3s;
}

.el-aside--custom {
    z-index: 999;
    overflow-y: scroll;
    transition: width 0.3;
}

.system-base-architecture--ham {
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

.system-base-architecture--ahm {
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

.system-base-architecture--hm {
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
        overflow: hidden;
    }
}

.system-base-architecture--am {
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
</style>

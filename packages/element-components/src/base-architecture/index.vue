<template>
    <div :class="`system-base-architecture--${layout.typography}`">
        <el-header class="el-header--custom" :style="headerStyle"> <slot name="header"> </slot> </el-header>
        <el-container>
            <el-aside class="el-aside--custom"> <slot name="aside"></slot> </el-aside>
            <el-main class="el-main--custom"> <slot name="main"></slot> </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ElAside, ElContainer, ElHeader, ElMain } from 'element-plus';
// import 'element-plus/theme-chalk/el-container.css';
import { watch, computed } from 'vue';
export interface LayoutOption {
    headerHeight: number;
    asideWidth: number;
    /**computed,
     * ham: header aside main
     * ahm: aside header main
     * hm: header main
     * am: aside main
     */
    typography: 'ham' | 'ahm' | 'hm' | 'am';
    backgroundColor?: string;
    headerStyle: Partial<CSSStyleDeclaration>;
}

const { layout = { headerHeight: 60, asideWidth: 200, typography: 'ham' } } = defineProps<{
    layout: LayoutOption;
}>();

watch(
    () => layout,
    (val) => {
        localStorage.setItem('layout-option', JSON.stringify(val));
    },
);
</script>
<style scoped lang="scss">
$--header-height: calc(v-bind('layout.headerHeight') * 1px);
$--aside-width: calc(v-bind('layout.asideWidth') * 1px);

.system-base-architecture {
    &--ham,
    &--ahm,
    &--hm,
    &--am {
        position: relative;
        width: 100%;
        height: 100%;
    }

    &--ham,
    &--ahm,
    &--hm {
        & > .el-container {
            height: calc(100% - #{$--header-height});
        }
    }
    &--am > .el-container {
        height: 100%;
    }
}

.el-header--custom,
.el-aside--custom,
.el-main--custom {
    position: relative;
    transition: all 0.3s;
}

.el-main--custom {
    padding: 10px;
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
        transform: translateY(calc(v-bind('layout.headerHeight') * -1px));
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

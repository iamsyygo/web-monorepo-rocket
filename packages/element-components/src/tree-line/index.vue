<template>
    <div class="el-tree-line-wrap">
        <span
            class="el-tree-line--vertical"
            v-if="node.level > 2"
            v-for="num in node.level - 2"
            :key="num"
            :style="{
                transform: `translateX(-${(node.level - num) * indent + checkboxWidth + expandWidth - clearance}px)`,
            }"
        >
        </span>
        <span class="el-tree-line--vertical" :style="verticalStyle" v-if="node.parent.parent"> </span>
        <span class="el-tree-line--hzorizontal" :style="horizontalStyle" v-if="node.parent.parent"> </span>
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import Node from 'element-plus/es/components/tree/src/model/node';
import { computed } from 'vue';

const {
    node,
    indent = 18,
    showCheckbox = false,
} = defineProps<{
    node: Node;
    indent: number;
    showCheckbox: boolean;
}>();

const clearance = 6;
const expandWidth = 24;
const checkboxWidth = showCheckbox ? 16 : -clearance;
const verticalStyle = computed(() => {
    const lastNode = node.parent.childNodes[node.parent.childNodes.length - 1];

    const distance = expandWidth + checkboxWidth + indent - clearance;
    return {
        transform: `translateX(-${distance}px)`,
        height: node === lastNode ? '50%' : '100%',
    };
});

const horizontalStyle = computed(() => {
    const distance = expandWidth + checkboxWidth + indent - clearance;
    const leafWidth = !node.isLeaf ? expandWidth : expandWidth / 2;
    return {
        transform: `translateX(-${distance}px)`,
        width: `${distance - checkboxWidth - leafWidth}px`,
    };
});
</script>
<style scoped lang="scss">
.el-tree-line-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.el-tree-line--vertical {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    bottom: 0;
    width: 1px;
    display: inline-block;
    border-left: #c0c4cc dashed 1px;
}
.el-tree-line--hzorizontal {
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    display: inline-block;
    border-bottom: #c0c4cc dashed 1px;
}
</style>

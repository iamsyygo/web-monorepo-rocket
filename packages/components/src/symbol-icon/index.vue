<template>
    <svg class="symbol-icon" aria-hidden="true">
        <use :xlink:href="`#${props.name}`"></use>
    </svg>
</template>

<script setup lang="ts">
import { symbols } from '@aoe/icons/es';
const props = defineProps<{
    name: (typeof symbols)[number];
}>();
</script>

<style scoped>
.symbol-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>

<template>
    <AppForm :form-props="option" v-model="modelValue">
        <template #layout>
            <el-row :gutter="10" style="width: 100%">
                <el-col :span="6" v-for="item in layoutOption" @click="handleChangeLayout(item)">
                    <div class="app-layout-type--wrapper">
                        <div :class="['layout-type--content', `${item.value}`]">
                            <svg
                                v-if="systemOption.typography === item.value && systemOption.effect === item.effect"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="100"
                                height="100"
                                fill="none"
                                stroke="black"
                                stroke-width="2"
                                class="layout-type--active"
                            >
                                <path
                                    d="M5 12L9 16 19 6"
                                    fill="none"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <div class="layout-type--head" :effect="`[${item.effect}]`"></div>
                            <div class="layout-type--aside" :effect="`[${item.effect}]`"></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </template>
    </AppForm>
    <div class="handle-btns">
        <ElButton type="primary" @click="handleApplication">应 用</ElButton>
        <ElButton type="info" @click="emits('close')">取 消</ElButton>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ElRow, ElCol, ElButton } from 'element-plus';
import AppForm from '../../form';
import { FormProps } from '../../form';
import { ArchitectureOption } from '../../base-architecture/index.vue';
import { useDefineModel } from '../../hooks/defineModel.h';

const emits = defineEmits<{
    'update:systemOption': [val: ArchitectureOption];
    close: [];
}>();

const props = defineProps<{
    systemOption: ArchitectureOption;
}>();

const option = reactive<FormProps>({
    spans: 24,
    labelWidth: 70,
    labelPosition: 'top',
    formItems: [
        {
            type: 'color-picker',
            prop: 'primary',
            label: '主题色',
        },
        {
            type: 'custom',
            prop: 'layout',
            label: '布局',
        },
        // {
        //     type: 'custom',
        //     prop: 'headerStyle',
        //     label: '头部背景色',
        // },
        {
            type: 'inputNumber',
            prop: 'headerHeight',
            label: '头部高度',
            props: {
                min: 60,
                max: 120,
                controlsPosition: 'right',
            },
        },
        {
            type: 'inputNumber',
            prop: 'asideWidth',
            label: '侧边栏宽度',
            props: {
                controlsPosition: 'right',
            },
        },
    ],
});

const layoutOption = [
    { label: '经典1', value: 'ahm', effect: 'dark' },
    { label: '经典2', value: 'am', effect: 'dark' },
    { label: '经典3', value: 'ham', effect: 'dark' },
    { label: '经典4', value: 'hm', effect: 'dark' },

    { label: '经典5', value: 'ahm', effect: 'light' },
    { label: '经典6', value: 'am', effect: 'light' },
    { label: '经典7', value: 'ham', effect: 'light' },
    { label: '经典8', value: 'hm', effect: 'light' },
];

const modelValue = useDefineModel(props, 'systemOption', emits, props.systemOption);
const handleChangeLayout = (item: any) => {
    // 这样无法修改第一个？被覆盖？
    // modelValue.value.typography = item.value;
    // modelValue.value.effect = item.effect;
    modelValue.value = {
        ...modelValue.value,
        typography: item.value,
        effect: item.effect,
    };
};

const handleApplication = () => {
    localStorage.setItem('AppOptions', JSON.stringify(props.systemOption));
    emits('close');
};
</script>

<style lang="scss" scoped>
.app-layout-type--wrapper {
    cursor: pointer;
    height: 70px;
    margin-bottom: 8px;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
}

.layout-type--content {
    position: relative;
    width: 100%;
    height: 100%;
}

@mixin type-head($color) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 18px;
    background: $color;

    .ham > & {
        z-index: 999;
    }
    .am > & {
        display: none;
    }
}

@mixin type-aside($color) {
    position: absolute;
    top: 0;
    left: 0;
    width: 21px;
    height: 100%;
    background: $color;

    .hm > & {
        display: none;
    }
}

.layout-type--head[effect='[dark]'] {
    @include type-head(var(--el-color-primary));
}
.layout-type--head[effect='[light]'] {
    @include type-head(var(--el-color-info-light-7));
}
.layout-type--aside[effect='[dark]'] {
    @include type-aside(var(--el-color-info-light-7));
}
.layout-type--aside[effect='[light]'] {
    @include type-aside(var(--el-color-primary));
}

.layout-type--active {
    content: '';
    position: absolute;
    bottom: 0;
    right: 5px;
    width: 30px;
    height: 30px;
    z-index: 999;
}
</style>

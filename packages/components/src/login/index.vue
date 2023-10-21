<template>
    <div class="signin--wrapper">
        <Transition appear name="signin">
            <div class="signin--container">
                <div class="signin-form">
                    <div class="signin-form--title">欢迎登录</div>
                    <div class="signin-form--content">
                        <a-space direction="vertical">
                            <a-input v-model:value="formModel.username" size="large" placeholder="请输入用户名" />
                            <a-input
                                v-model:value.lazy="formModel.password"
                                type="password"
                                visibilityToggle
                                visible
                                size="large"
                                placeholder="请输入密码"
                            />
                            <a-checkbox v-model:checked="formModel.remember">记住密码</a-checkbox>
                            <a-button type="primary" size="large" @click="onSignin">登 录</a-button>
                        </a-space>
                    </div>
                </div>
                <div class="signin-illustration">
                    <img src="./images/illustration.svg" alt="illustration" />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
// import { message } from 'ant-design-vue';
import AInput from 'ant-design-vue/es/input';
import AButton from 'ant-design-vue/es/button';
import ACheckbox from 'ant-design-vue/es/checkbox';
import ASpace from 'ant-design-vue/es/space';

const formModel = ref({
    username: '',
    password: '',
    remember: false,
});

onMounted(() => {
    const cacheSignin = localStorage.getItem('cacheSignin');
    if (cacheSignin) {
        const { username, password } = JSON.parse(cacheSignin);
        formModel.value.username = username;
        formModel.value.password = password;
        formModel.value.remember = true;
    }
});

const onSignin = () => {
    const { username, password, remember } = formModel.value;

    if (remember) {
        localStorage.setItem('cacheSignin', JSON.stringify({ username, password }));
    } else {
        localStorage.removeItem('cacheSignin');
    }
};
</script>

<style scoped lang="scss">
.signin--wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f2f6;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        left: -50px;
        top: -50px;
        width: 200px;
        height: 200px;
        background: url(./images/meatball.svg) no-repeat;
        animation: rotateFrames 30s linear infinite;
    }
    &::after {
        content: '';
        position: absolute;
        right: -50px;
        bottom: -80px;
        width: 300px;
        height: 300px;
        background: url(./images/catcher-mit.svg) no-repeat;
        animation: rotateFrames 30s linear infinite;
    }
}

.signin--container {
    display: flex;
    width: 900px;
    height: 500px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 6px #eff1f2;
    position: relative;
    overflow: hidden;
    z-index: 99;
    &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 600px;
        height: 120%;
        transform: rotate(270deg);
        background: url(./images/form.bg.svg) no-repeat;
    }
}
.signin-form {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
.signin-form--title {
    font-size: 28px;
    font-weight: 900;
    margin: 50px;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #7ea1fc, #396efb);
}
.signin-form--content {
    flex: 1;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    margin-top: 50px;

    .ant-input {
        border: none !important;
        background-color: #eff1f2;
    }
    .ant-btn {
        width: 100%;
    }
    .ant-space {
        width: 70%;
    }
    .ant-checkbox-wrapper {
        user-select: none;
        float: left;
    }
}
.signin-illustration {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 80%;
        object-fit: cover;
    }
}

@media screen and (max-width: 800px) {
    .signin-illustration {
        display: none;
    }
    .signin--container::before {
        display: none;
    }
}

@keyframes rotateFrames {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.signin-enter-active,
.signin-leave-active {
    transition: all 0.8s;
}

.signin-enter-from,
.signin-leave-to {
    opacity: 0;
    transform: scale(0);
}

.signin-enter-to,
.signin-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>

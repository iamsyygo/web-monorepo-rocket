import { ref, toRef } from "vue"

function(){
    const data = ref({})

    // 可以进行异步请求，数据获取异步，直接返回 ref 数据回来会响应式的更新ref


    return toRef(data, 'key')
}
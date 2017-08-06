<template>
    <sub-demo></sub-demo>
</template>

<script>
    import SubDemo from './SubDemo.vue'

    export default {
        components: {SubDemo},
        name: 'demo',
        created () {
            // 注册`store`模块，详情请读`vuex`文档。
            this.$store.registerModule('demo', {
                namespaced: true,
                // 注意和组件的data类似，此处应返回一个创建state对象的函数
                state () {
                    return {
                        msg: 'Hello! This is the welcome message!'
                    }
                },
                mutations: {
                    change (state) {
                        state.msg = 'Message changed!'
                    }
                }
            })
        }
    }
</script>

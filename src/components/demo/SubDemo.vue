<template>
	<button @click="change">{{msg}}</button>
</template>

<script>
    // `mapState(path, array)`表示将`array`里的`store`属性映射到计算属性。`path`表示模块路径。
    import {mapState, mapMutations} from 'vuex'
    export default {
        name: 'sub-demo',
        computed: {
            // es6语法，`...`表示随后的对象是要合并到父对象的。
            ...mapState('demo', ['msg'])
        },
        methods: {
            ...mapMutations('demo', ['change'])
        }
    }
</script>

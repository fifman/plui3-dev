<template>
    <div class="demo">
        <button @click="show">{{msg}}</button>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        name: 'demo',
        methods: {
            show: function (event) {
                this.msg = '你点击了组件！'
            }
        }
    }
</script>

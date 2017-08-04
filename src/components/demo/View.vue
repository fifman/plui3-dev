<template>
    <demo :msg="msg"></demo>
</template>

<script>
    import Demo from '@c/demo/Demo'

    export default {
        components: {Demo},
        data () {
            return {
                msg: 'demo组件演示'
            }
        }
    }
</script>

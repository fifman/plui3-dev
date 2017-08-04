<template>
    <hello class="hello-view"></hello>
</template>

<script>
    import Hello from '@c/hello/Hello'

    export default {
        components: {Hello}
    }
</script>
<style scoped>
    .hello-view{
        justify-content: center;
        flex-direction: column;
        align-items: center;
        display: flex;
    }
</style>

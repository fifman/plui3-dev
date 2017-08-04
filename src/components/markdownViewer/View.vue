<template>
    <markdown-viewer :file="file"></markdown-viewer>
</template>

<script>
    import MarkdownViewer from './MarkdownViewer.vue'

    export default {
        components: {MarkdownViewer},
        name: 'markdown-viewer-view',
        data () {
            return {
                file: this.$route.query.file
            }
        },
        watch: {
            '$route': function (to) {
                this.file = to.query.file
            }
        }
    }
</script>

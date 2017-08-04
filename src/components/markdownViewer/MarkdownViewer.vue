<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script>
    import hljs from 'highlightjs'
    import 'highlightjs/styles/github-gist.css'
    import 'github-markdown-css/github-markdown.css'
    import marked from 'marked'

    hljs.initHighlightingOnLoad()
    marked.setOptions({
        highlight (code) {
            return hljs.highlightAuto(code).value
        }
    })

    export default {
        props: ['file'],
        name: 'markdown-viewer',
        asyncComputed: {
            async content () {
                const response = await this.$http.get(this.file)
                return marked(response.body)
            }
        }
    }
</script>

<style scoped>
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 900px;
        margin: 0 auto;
        padding: 45px;
        max-height: inherit;
        overflow-y: auto;
    }
</style>

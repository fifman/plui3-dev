<template>
    <el-menu theme="dark" :default-active="activeId" class="el-menu-demo" :router="router" @select="handleSelect">
        <side-menu-item
            v-for="item in items"
            :key="item.mid"
            :title="item.title"
            :subs="item.subs"
            :icon="item.icon"
            :mid="item.mid"
            :menu="item.menu"
            :route="item.route"
        >
        </side-menu-item>
    </el-menu>
</template>

<script>
	import SideMenuItem from './SideMenuItem.vue'

export default {
    components: {SideMenuItem},
    name: 'side-menu',
    props: {
        items: Array,
        activeId: String,
        router: Boolean
    },
    methods: {
        handleSelect (key, keyPath) {
            this.$emit('selected', key, keyPath)
        }
    }
}
</script>

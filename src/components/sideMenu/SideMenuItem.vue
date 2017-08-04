<template>
    <el-submenu :index="mid" v-if="menu">
        <template slot="title">
            <i :class="icon"></i>
            <span slot="title">{{title}}</span>
        </template>
        <el-menu-item
            v-for="sub in subs"
            :key="sub.mid"
            :index="sub.mid"
            :route="sub.route"
        >{{sub.title}}</el-menu-item>
    </el-submenu>
    <el-menu-item
        :index="mid"
        :route="route"
        v-else>
        <i :class="icon"></i>
        <span slot="title">{{title}}</span>
    </el-menu-item>
</template>

<script>
    export default {
        name: 'side-menu-item',
        props: {
            title: String,
            icon: String,
            mid: String,
            menu: Boolean,
            subs: Array,
            route: Object
        }
    }
</script>

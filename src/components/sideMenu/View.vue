<template>
    <side-menu
        :items="items"
        :active-id="activeId"
        :router="router"
        class="sub-side"
    ></side-menu>
</template>

<script>
    import SideMenu from '@c/sideMenu/SideMenu'

    export default {
        components: {SideMenu},
        name: 'side-menu-view',
        data () {
            return {
                items: [{
                    menu: true,
                    title: '项目说明',
                    icon: 'el-icon-message',
                    mid: '1',
                    subs: [{
                        mid: 'hello',
                        title: 'hello组件'
                    }, {
                        mid: 'demo',
                        title: 'demo组件'
                    }]
                }, {
                    menu: false,
                    title: '待扩展',
                    icon: 'el-icon-message',
                    mid: '2'
                }],
                activeId: '1',
                router: false
            }
        }
    }
</script>
<style scoped>
    .sub-side{
        width: 240px;
    }
</style>

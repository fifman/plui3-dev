/* eslint-disable no-unused-vars,no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import router from './router'
import ElementUI from 'element-ui'
import SideMenu from '@c/sideMenu/SideMenu'
import PluiTable from '@c/table/Table'
import PluiPagination from '@c/pagination/Pagination'
import PluiDatagrid from '@c/datagrid/Datagrid'
import PluiCombogrid from '@c/combogrid/Combogrid'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.component('side-menu', SideMenu)
Vue.component('plui-table', PluiTable)
Vue.component('plui-pagination', PluiPagination)
Vue.component('plui-datagrid', PluiDatagrid)
Vue.component('plui-combogrid', PluiCombogrid)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    data: {
        items: [{
            menu: true,
            title: '项目示例',
            icon: 'el-icon-message',
            mid: '1',
            subs: [{
                mid: 'side-menu',
                title: 'sideMenu组件'
            }, {
                mid: 'demo',
                title: 'demo组件'
            }, {
                mid: 'datagrid',
                title: 'datagrid组件'
            }, {
                mid: 'combogrid',
                title: 'combogrid组件'
            }, {
                mid: 'element',
                title: 'element混合业务组件'
            }, {
                mid: 'md-test',
                title: 'markdown-viewer组件',
                route: {
                    path: 'markdown-viewer',
                    query: {
                        file: 'docs/components/markdownViewer.md'
                    }
                }
            }]
        }, {
            menu: true,
            title: '说明',
            icon: 'el-icon-message',
            mid: '2',
            subs: [{
                mid: 'md-readme',
                title: 'README',
                route: {
                    path: 'markdown-viewer',
                    query: {
                        file: 'docs/README.md'
                    }
                }
            }]
        }],
        activeId: '1',
        router: true
    },
    methods: {
        selected (key, keyPath) {
            // console.log(keyPath)
        }
    }
})

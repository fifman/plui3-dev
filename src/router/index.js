import Vue from 'vue'
import Router from 'vue-router'
import HelloView from '@c/hello/View'
import DemoView from '@c/demo/View'
import SideMenuView from '@c/sideMenu/View'
import DatagridView from '@c/datagrid/View'
import CombogridView from '@c/combogrid/View'
import MarkdownViewerView from '@c/markdownViewer/View'
import ElementView from '@c/element/element'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloView
        }, {
            path: '/side-menu',
            name: 'side-menu',
            component: SideMenuView
        }, {
            path: '/demo',
            name: 'demo',
            component: DemoView
        }, {
            path: '/datagrid',
            name: 'datagrid',
            component: DatagridView
        }, {
            path: '/combogrid',
            name: 'combogrid',
            component: CombogridView
        }, {
            path: '/element',
            name: 'element',
            component: ElementView
        }, {
            path: '/markdown-viewer',
            name: 'markdown-viewer',
            component: MarkdownViewerView
        }
    ]
})

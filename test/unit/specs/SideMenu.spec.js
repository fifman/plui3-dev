import Vue from 'vue'
import SideMenu from '@c/sideMenu/SideMenu'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.component('side-menu', SideMenu)

/**
 * 封装了一个创建根实例的方法，便于重用。
 * @param items props参数items
 * @param activeId props参数activeId
 * @returns {*} 根实例
 */
function newRoot (items, activeId) {
    const Constructor = Vue.extend({
        template: "<side-menu :items='items' :activeId='activeId' :router='router'></side-menu>",
        data () {
            return {
                items,
                activeId,
                router: false
            }
        }
    })
    return new Constructor().$mount()
}

/**
 * 单元测试集。第一个参数为测试集的名称。一个`.spec.js`文件里只有一个测试集。
 */
describe('SideMenu.vue', () => {
    // 测试集内的一个单元测试。一个测试集可包含多个测试。第一个参数为测试名。
    it('render correct contents', () => {
        const vm = newRoot([{
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
        }], '1')
        // 断言语法。`expect(预期值).to.equal(实际值)`。类似java语法中的assert。
        expect(vm.$children[0].$children[0].$children.length)
            .to.equal(vm.items.length)
    })
})

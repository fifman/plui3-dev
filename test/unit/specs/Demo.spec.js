import Vue from 'vue'
import Demo from '@c/demo/Demo.vue'
Vue.component('demo', Demo)
import {mount} from 'avoriaz'

import {Store} from 'vuex'

const store = new Store({
    state: {
        msg: 'Hello! This is the welcome message!'
    },
    mutations: {
        change (state) {
            state.msg = 'Message changed!'
        }
    }
})

/**
 * 单元测试集。第一个参数为测试集的名称。一个`.spec.js`文件里只有一个测试集。
 */
describe('Demo.vue', () => {
    // 测试集内的一个单元测试。一个测试集可包含多个测试。第一个参数为测试名。
    it('vuex success', () => {
        const wrapper = mount(Demo, {store})
        const button = wrapper.find('button')[0]
        expect(button.text()).to.equal('Hello! This is the welcome message!')
        button.trigger('click')
        expect(store.state.msg).to.equal('Message changed!')
    })
})

import TestButton from '../package/test-button/index.vue'


const coms = [TestButton]

//批量注册组件
const install = function (Vue) {
    coms.forEach(com => {
        Vue.component(com.name, com)
    })
}

export default install
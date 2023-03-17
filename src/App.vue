<template>
  <test-button @click="btnClick"></test-button>
</template>

<script>
import TestButton from './package/test-button'

export default {
  name: 'App',
  components: {
    TestButton
  },
  methods: {
    btnClick() {
      console.log('测试组件点击')
    }
  }
}
</script>

<style>
</style>

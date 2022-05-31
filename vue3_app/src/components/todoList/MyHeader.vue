<template>
  <el-input v-model="inputValue" placeholder="请输入你的任务名称，按回车确认" @change.enter="onAdd"/>
</template>

<script setup lang="ts">
  import { nanoid } from 'nanoid'
  import { ref } from 'vue'
  let inputValue = ref('')
  const emits = defineEmits(['getTodo'])
  function onAdd() {
    const todoObj = {
      id: nanoid(),
      title: inputValue.value,
      done: false
    }
    emits('getTodo', todoObj)
    inputValue.value = ''
  }
</script>

<style lang="scss">
</style>
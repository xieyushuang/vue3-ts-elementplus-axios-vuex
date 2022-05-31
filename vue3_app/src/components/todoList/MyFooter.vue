<template>
  <div class="footer-wrapper">
    <span>
      <el-checkbox v-model="checked" label="" size="large" style="margin-right:10px" @change="onChangeChecked"/>
      <span>
        已完成{{checkedNum}}/全部{{props.todos.length}}
      </span>
    </span>
    <el-button type="danger" size="small" @click="onClearChecked">清除已完成任务</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  const emits = defineEmits(['handleIsCheckAll','onClearChecked'])
  const props = defineProps({
    todos: {
      type: Array as () => Array<any>,
      required: true, 
      default: () => [] 
    }
  });
  let checked = ref(false)
  let checkedNum = ref(props.todos.filter(item => item.done === true).length)

  function onChangeChecked(isChecked: boolean) {
    emits('handleIsCheckAll', isChecked)
  }

  function onClearChecked() {
    checked.value = false
    checkedNum.value = 0
    emits('onClearChecked')
  }

  watch(()=>props.todos, (newValue, oldValue) => {
    checkedNum.value = newValue.filter(item => item.done === true).length
    if (newValue.length && checkedNum.value === newValue.length) {
      checked.value = true
    } else {
      checked.value = false
    }
  }, {deep: true})
</script>

<style lang="scss" scoped>
.footer-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
</style>
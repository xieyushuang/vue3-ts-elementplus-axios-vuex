<template>
  <li>
    <span>
      <el-checkbox v-model="props.todo.done" label="" size="large" style="margin-right:10px"/>
      <span>{{ props.todo.title }}</span>
    </span>
    <el-button type="danger" size="small" @click="onDelete(props.todo.id)">删除</el-button>
  </li>
</template>

<script setup lang="ts">
  const props = defineProps({
    todo: {
      type: Object,
      required: true, 
      default: () => null
    }
  });
  const emits = defineEmits(['onDelete'])
  function onDelete(id: string) {
    emits('onDelete', id)
  }
</script>

<style lang="scss" scoped>
li {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #ccc solid 1px;
  padding: 0 10px;
  &:last-of-type {
    border: none;
  }
}
</style>
<template>
  <ul class="main-wrapper">
    <MyItem v-for="todoObj in props.todos" :key="todoObj.id" :todo="todoObj" @onDelete="onDelete"></MyItem>
  </ul>
</template>

<script setup lang="ts">
  import MyItem from './MyItem.vue';
  const props = defineProps({
    todos: {
      type: Array as () => Array<any>,
      required: true, 
      default: () => [] 
    }
  });
  const emits = defineEmits(['onDelete'])
  function onDelete(id: string) {
    emits('onDelete', id)
  }

</script>

<style lang="scss" scoped>
.main-wrapper {
  box-sizing: border-box;
  margin: 10px 0;
  border: #ccc solid 1px;
  border-radius: 5px;
}
</style>
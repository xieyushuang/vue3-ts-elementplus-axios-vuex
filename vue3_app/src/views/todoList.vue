<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>TODO-LIST</h1>
      <div class="list-wrapper">
        <MyHeader @getTodo="getTodo"></MyHeader>
        <MyList :todos="data.todos" @onDelete="onDelete"></MyList>
        <MyFooter :todos="data.todos" @handleIsCheckAll="handleIsCheckAll" @onClearChecked="onClearChecked"></MyFooter>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import MyHeader from '@/components/todoList/MyHeader.vue';
  import MyList from '@/components/todoList/MyList.vue';
  import MyFooter from '@/components/todoList/MyFooter.vue';
  let data = reactive<any>({
    todos: [
      { id: 1, title: '吃饭', done: true },
      { id: 2, title: '睡觉', done: false },
      { id: 3, title: '打豆豆', done: true }
    ]
  })
  
  function getTodo(todoObj:any) {
    data.todos.unshift(todoObj)
  }

  function onDelete(id: string) {
    data.todos.splice(data.todos.findIndex((item:any) => item.id === id), 1)
  }

  function handleIsCheckAll(isChecked: boolean) {
    data.todos.forEach((item:any) => {
      item.done = isChecked
    })
  }

  function onClearChecked() {
    data.todos = data.todos.filter((item:any) => {
      return !item.done
    })
  }

</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin: 50px 0 20px 0;
  font-size: 24px;
  text-align: center;
}
.list-wrapper {
  box-sizing: border-box;
  padding: 40px;
  border: #ccc solid 1px;
}
</style>
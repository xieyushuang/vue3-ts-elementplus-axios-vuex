<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>人员列表</h1>
      <div class="list-wrapper">
        <h2 style="color: red;">求和组件求和为: {{ store.state.count.sum }} </h2>
        <hr/>
        <div style="display: flex;">
          <el-input v-model="inputValue" placeholder="请输入名字" />
          <el-button type="primary" @click="addPerson"> 添加 </el-button>
        </div>
        <hr/>
        <ul>
          <li v-for="person in store.state.person.personList" :key="person.id">{{ person.name }}</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import {useStore } from 'vuex'
  import { nanoid } from 'nanoid';
  const store = useStore()
  let inputValue = ref('')
  const options = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    }
  ]

  const addPerson = () => {
    store.commit('person/ADD_PERSON', {
      id: nanoid(),
      name: inputValue.value
    })
    inputValue.value = ''
  }
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin:  20px 0;
  font-size: 24px;
  text-align: center;
}
.list-wrapper {
  box-sizing: border-box;
  padding: 40px;
  border: #ccc solid 1px;
}
</style>
<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>{{ store.state.name }} 求和</h1>
      <div class="list-wrapper">
        <h2>当前求和为: {{ store.state.count.sum }} </h2>
        <hr/>
        <h2>当前求和放大10倍为: {{ store.getters['count/bigSum'] }} </h2>
        <hr/>
        <h2 style="color: red;">人员列表组件总人数为: {{ store.state.person.personList.length }} </h2>
        <hr/>
        <el-select v-model="n" class="m-2" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <hr/>
        <div>
          <el-button size="small" type="primary" @click="increment"> + </el-button>
          <el-button size="small" type="primary"  @click="decrement"> - </el-button>
          <el-button size="small" type="primary" @click="incrementOdd"> 当前求和为奇数再 +  </el-button>
          <el-button size="small" type="primary" @click="incrementWait"> 延时等一等再 +  </el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import {useStore } from 'vuex'
  const store = useStore()
  const n = ref(1)
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

  const increment = () => {
    store.commit('count/INCREMENT', n.value)
  }

  const decrement = () => {
    store.commit('count/DECREMENT', n.value)
  }

  const incrementOdd = () => {
    store.dispatch('count/incrementOdd', n.value)
  }

  const incrementWait = () => {
    store.dispatch('count/incrementWait', n.value)
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
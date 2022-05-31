<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>watch监听</h1>
      <div class="list-wrapper">
        <div>
          <span>sum: {{ sum }}</span>
          <el-button size="small" type="primary" @click="sum++">点击+</el-button>
        </div>
        <div>
          <span>msg: {{ msg }}</span>
          <el-button size="small" type="primary" @click="msg+='!'">点击</el-button>
        </div>
        <div>
          <span>姓名: {{ person.name }}</span>
          <span>年龄: {{ person.age }}</span>
          <span>工作: {{ person.job.j1.salary }}</span>
          <el-button size="small" type="primary" @click="person.name += '~'">修改姓名</el-button>
          <el-button size="small" type="primary" @click="person.age++">修改年龄</el-button>
          <el-button size="small" type="primary" @click="person.job.j1.salary++">修改工作</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { ref, reactive, watch } from 'vue'
  let sum = ref(0)
  let msg = ref('你好啊')

  const person = reactive({
    name: '小双',
    age: 18,
    job: {
      j1: {
        salary: 1
      }
    }
  })

  // 情况一：监听ref响应式
  // watch(sum,(newValue, oldValue) => {
  //   console.log('newValue:', newValue, ', oldValue:', oldValue)
  // }, {immediate: true})

  // 情况二：监听多个ref响应式
  // watch([sum, msg] ,(newValue, oldValue) => {
  //   console.log('newValue:', newValue, ', oldValue:', oldValue)
  // }, {immediate: true})
 
  // 情况三：监听reactive响应式,此处无法获得正确的oldValue,强制开启了deep深度监听，无法关掉
  // watch(person ,(newValue, oldValue) => {
  //   console.log('newValue:', newValue, ', oldValue:', oldValue)
  // }, {deep: false})

  // 情况四：监听reactive所定义的一个响应式数据中的某一个属性
  // watch(()=>person.age,(newValue, oldValue)=>{
  //   console.log('newValue:', newValue, ', oldValue:', oldValue)
  // })

  // 情况四：监听reactive所定义的一个响应式数据中的多个属性
  // watch([()=>person.age, ()=>person.name],(newValue, oldValue)=>{
  //   console.log('newValue:', newValue, ', oldValue:', oldValue)
  // })


  // 特殊情况
  watch(()=>person.job,(newValue, oldValue)=>{
    console.log('newValue:', newValue, ', oldValue:', oldValue)
  }, {deep: true})
  
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
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: #ccc solid 1px;
    &:last-of-type {
      border: none;
    }
  }
}
</style>
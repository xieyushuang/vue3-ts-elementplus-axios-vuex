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
  import { ref, reactive, watch, watchEffect } from 'vue'
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
  // 上来就会执行，有点像computed, 不足要指定监听对象，用到谁，就会监听谁
  watchEffect(()=>{
    console.log('====')
  })
  
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
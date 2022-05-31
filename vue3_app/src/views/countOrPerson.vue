<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>组件共享案例</h1>
    </el-col>
  </el-row>

  <Count/>
  <Person/>
</template>

<script setup lang="ts">
  import Count from '@/components/countOrPerson/Count.vue'
  import Person from '@/components/countOrPerson/Person.vue'
  import {useStore } from 'vuex'
  const store = useStore()
  
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin:  10px 0;
  font-size: 24px;
  text-align: center;
}
</style>
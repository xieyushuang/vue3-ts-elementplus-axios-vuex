<template>
  <el-row>
    <el-col :span="10" :offset="7">
      <h1>欢迎来到vue3</h1>
    </el-col>
  </el-row>

  <Count/>
  <Person/>
</template>

<script setup lang="ts">
  
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  margin:  10px 0;
  font-size: 24px;
  text-align: center;
}
</style>
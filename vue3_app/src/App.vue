<template>
  <LayoutHeader/>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import LayoutHeader from '@/components/layout/LayoutHeader.vue'
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  min-height: 100%;
  overflow: auto;
  color: $globalFontColor;
  font-size: $globalFontSize;
}
</style>
<template>
  <el-container class="h-screen">
    <el-header class="p-0">
      <Header />
    </el-header>
    <el-container>
      <el-main class="bg-gray-300">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <!-- <div class="flex gap-8 items-start">
    <DnDTestCopy></DnDTestCopy>
  </div> -->
  <!-- <el-container class="h-screen">
    <el-header class="p-0">
      <Header />
    </el-header>
    <el-container class="h-full">
      <el-aside width="200px">
        <LeftSideBar class="h-full" />
      </el-aside>
      <el-main class="bg-gray-300">
        <RouterView />
      </el-main>
    </el-container>
  </el-container> -->
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex flex-1">
      <LeftSideBar />
      <div class="flex-1 min-w-0 p-2">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftSideBar from '@/components/LeftSideBar.vue';
import Header from '@/components/Header.vue';
</script>

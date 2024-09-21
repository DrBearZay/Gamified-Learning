<template>
  <!-- <div class="flex gap-8 items-start">
    <DnDTestCopy></DnDTestCopy>
  </div> -->
  <el-container class="h-screen">
    <el-header class="bg-yellow-600 flex justify-between items-center">
      <div>平台名称</div>
      <!-- <div>用户头像</div> -->
      <el-dropdown placement="top-start">
        <el-button circle size="large"> 头像 </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- todo 根据学生/老师角色不同在下钻菜单中展示不同的功能 -->
            <el-dropdown-item>我的账号</el-dropdown-item>
            <el-dropdown-item>The Action 2st</el-dropdown-item>
            <el-dropdown-item>The Action 3st</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <LeftSideBar class="h-screen" />
      </el-aside>
      <el-main class="bg-gray-300">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LeftSideBar from '@/components/LeftSideBar.vue'
</script>

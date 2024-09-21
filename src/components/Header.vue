<template>
  <div class="bg-yellow-600 flex justify-between items-center px-5 h-full shadow-lg">
    <div>平台名称</div>
    <el-dropdown placement="top-start">
      <el-button circle size="large"> 头像 </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <!-- todo 根据学生/老师角色不同在下钻菜单中展示不同的功能 -->
          <el-dropdown-item @click="router.push({ name: 'Home' })">主页</el-dropdown-item>
          <el-dropdown-item @click="router.push({ name: 'MyAccount' })">我的账号</el-dropdown-item>
          <!-- <el-dropdown-item>The Action 2st</el-dropdown-item> -->
          <!-- <el-dropdown-item>The Action 3st</el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
</script>

<style lang="scss" scoped></style>

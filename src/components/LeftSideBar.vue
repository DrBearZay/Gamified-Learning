<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="path + '/level-select'"
    text-color="#fff"
    router
  >
    <el-menu-item :index="path + '/level-select'">
      <span>关卡选择</span>
    </el-menu-item>
    <el-menu-item :index="path + '/test2'" disabled>
      <span>test2</span>
    </el-menu-item>
    <!-- <el-menu-item :index="path + '/2'">
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item :index="path + '/3'" disabled>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item :index="path + '/4'">
      <span>Navigator Four</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script setup lang="ts">
const path = '/home';
</script>

<style lang="scss" scoped>
:deep(.is-active) {
  background-color: gray;
}
</style>

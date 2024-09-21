<template>
  <div>select</div>
  <button @click="router.push({ name: 'Game', params: {} })">关卡一</button>
</template>

<script setup lang="ts">
import router from '@/router';
</script>

<style lang="scss" scoped></style>

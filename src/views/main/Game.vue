<template>
  <div class="flex h-full gap-5">
    <ShowArea class="flex-1" />
    <InstructionList class="h-full" />
  </div>
</template>

<script setup lang="ts">
import InstructionList from '@/components/game/InstructionList.vue';
import ShowArea from '@/components/game/ShowArea.vue';
</script>

<style lang="scss" scoped></style>

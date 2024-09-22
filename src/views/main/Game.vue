<template>
  <div class="flex h-full gap-4 select-none">
    <div class="flex-1 flex flex-col gap-4 min-w-0">
      <ShowArea class="flex-1" />
      <OperationBoard />
    </div>
    <InstructionList class="h-full" />
  </div>
</template>

<script setup lang="ts">
import InstructionList from '@/components/game/InstructionList.vue';
import ShowArea from '@/components/game/ShowArea.vue';
import OperationBoard from '@/components/game/OperationBoard.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <div class="flex gap-8 items-start">
    <InstructionSelector></InstructionSelector>
    <CodeArea></CodeArea>
  </div>

</template>

<script setup lang="ts">
import CodeArea from '@/components/CodeArea.vue';
import InstructionSelector from '@/components/InstructionSelector.vue';
</script>

<style lang="scss" scoped></style>

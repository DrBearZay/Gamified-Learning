<template>
  <div class="bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col gap-2">
    <div class="box-content border-[6px] border-black h-[60px] overflow-hidden flex items-center">
      <div
        class="w-[60px] h-[60px] flex items-center justify-center flex-shrink-0"
        :class="index % 2 === 0 ? 'bg-yellow-900' : 'bg-yellow-800'"
        v-for="index of 20"
        :key="index"
      >
        <div
          class="box-item w-[40px] h-[40px] flex items-center justify-center bg-green-600"
          v-if="inputList[index - 1]"
        >
          {{ inputList[index - 1] }}
        </div>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center">floor</div>
    <div>output</div>
  </div>
</template>

<script setup lang="ts">
const inputList = ref<number[]>([1, 2, 3, 4, 5]);
</script>

<style lang="scss" scoped>
.box-item {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
</style>

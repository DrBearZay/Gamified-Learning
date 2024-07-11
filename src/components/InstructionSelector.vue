<template>
  <div class="flex flex-col gap-2 p-4 w-[200px] bg-gray-500/5 rounded" ref="instrumentListEL">
    <div v-for="item in instrumentList" :key="item.id" class="cursor-move h-50px bg-gray-500/5 rounded p-3">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from 'vue-draggable-plus';

const instrumentList = ref([
  {
    name: 'Joao',
    id: '1'
  },
  {
    name: 'Jean',
    id: '2'
  },
  {
    name: 'Johanna',
    id: '3'
  },
  {
    name: 'Juan',
    id: '4'
  }
])

const instrumentListEL = ref()
useDraggable(instrumentListEL, instrumentList, {
  animation: 150,
  group: {
    name: 'code',
    pull: 'clone',
    put: false
  },
  sort: false,
  clone(element: Record<string, string>) {
    return {
      name: `${element.name}`,
      id: `${element.id}`
    }
  }
})
</script>

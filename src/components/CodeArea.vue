<template>
  <div class="flex flex-col gap-2 p-4 w-[200px] max-h-[350px] m-auto bg-gray-500/5 rounded overflow-auto"
    ref="codeListEL">
    <div v-for="item in codeList" :key="item.id" class="cursor-move h-50px bg-gray-500/5 rounded p-3">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from 'vue-draggable-plus';

const codeList = ref([
  {
    name: '1',
    id: '1'
  },
  {
    name: '2',
    id: '2'
  },
  {
    name: '3',
    id: '3'
  },
  {
    name: '4',
    id: '4'
  },
  {
    name: '5',
    id: '5'
  },
  {
    name: '6',
    id: '6'
  },
  {
    name: '7',
    id: '7'
  },
  {
    name: '8',
    id: '8'
  },
  {
    name: '9',
    id: '9'
  },
  {
    name: '10',
    id: '10'
  },
  {
    name: '11',
    id: '11'
  },
  {
    name: '12',
    id: '12'
  },
  {
    name: '13',
    id: '13'
  },
  {
    name: '14',
    id: '14'
  },
  {
    name: '15',
    id: '15'
  }, {
    name: '16',
    id: '16'
  },
  {
    name: '17',
    id: '17'
  },
  {
    name: '18',
    id: '18'
  },
  {
    name: '19',
    id: '19'
  },
  {
    name: '20',
    id: '20'
  },
  {
    name: '21',
    id: '21'
  }

])

const codeListEL = ref()

useDraggable(codeListEL, codeList, {
  animation: 150,
  group: 'code',
  // scroll: true,
  // forceAutoScrollFallback: true,
  // scrollSensitivity: 100,
  // scrollSpeed: 12,
  // swapThreshold: 0.8,
})

</script>

<style lang="scss" scoped>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>

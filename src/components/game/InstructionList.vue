<template>
  <!-- <div style="display: flex; justify-content: stretch; margin-top: 50px; margin-right: 50px"> -->
  <div class="flex gap-5 shadow-lg rounded-lg p-4 bg-gray-200">
    <div>
      <Container
        behaviour="copy"
        group-name="1"
        :get-child-payload="getChildPayload1"
        class="draggable-container"
      >
        <Draggable v-for="item in items1" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
    <div>
      <Container
        group-name="1"
        :get-child-payload="getChildPayload2"
        @drop="onDrop2"
        :remove-on-drop-out="true"
        class="draggable-container"
      >
        <Draggable v-for="item in items2" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Container, Draggable } from 'vue3-smooth-dnd';

// item1里复制出来的id不能写死
const items1 = ref([
  { id: 1, data: 'Input' },
  { id: 2, data: 'Output' },
  { id: 3, data: 'Add' },
  { id: 4, data: 'Sub' },
]);

const items2 = ref([
  { id: 1, data: '1' },
  { id: 2, data: '2' },
  { id: 3, data: '3' },
  { id: 4, data: '4' },
]);

type dropResultType = {
  removedIndex: number;
  addedIndex: number;
  payload: string;
};
const onDrop2 = (dropResult: dropResultType) => {
  console.log(dropResult);
  items2.value = applyDrag(items2.value, dropResult);
};

const applyDrag = (arr: { id: number; data: string }[], dragResult: any) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = { id: arr.length + 1, data: payload };

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

const getChildPayload1 = (index: number) => {
  console.log('111');
  return items1.value[index].data;
};
const getChildPayload2 = (index: number) => {
  console.log('222');
  return items2.value[index].data;
};
</script>

<style lang="scss" scoped>
.draggable-container {
  @apply overflow-y-auto h-[300px] w-[200px] bg-gray-100 rounded-md shadow-md px-3 py-2;
}
.draggable-item {
  @apply bg-yellow-500 my-2 p-1 cursor-move rounded-md shadow-md;
}
</style>

<template>
  <!-- <div style="display: flex; justify-content: stretch; margin-top: 50px; margin-right: 50px"> -->
  <div class="flex gap-5 shadow-lg rounded-lg p-4 bg-gray-200">
    <div>
      <Container
        behaviour="copy"
        group-name="1"
        :get-child-payload="getAddPayload"
        class="draggable-container"
      >
        <Draggable v-for="item in instructionList" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
    <div>
      <!-- todo 增加行号 -->
      <Container
        group-name="1"
        :get-child-payload="getSwapPayload"
        @drop="addInstruction"
        :remove-on-drop-out="true"
        class="draggable-container"
      >
        <Draggable v-for="item in userCodeList" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import { ref } from 'vue';
import { Container, Draggable } from 'vue3-smooth-dnd';

type PayloadType = {
  opr: string;
  param?: number;
};
type InstructionType = {
  id: string | number;
  data: string;
  payload: PayloadType;
};
// item1里复制出来的id不能写死
// 可用指令
const instructionList = ref<InstructionType[]>([
  { id: 'Input', data: 'Input', payload: { opr: 'Input' } },
  { id: 'Output', data: 'Output', payload: { opr: 'Output' } },
  // todo 可以通过颜色来区分同一组内的jump和distination
  { id: 'Jump', data: 'Jump', payload: { opr: 'Jump' } },
  // { id: 'Destination', data: 'Destination' },
  { id: 'Add', data: 'Add', payload: { opr: 'Add' } },
  { id: 'Sub', data: 'Sub', payload: { opr: 'Sub' } },
]);
// 用户代码
const userCodeList = ref<InstructionType[]>([
  { id: 'Input', data: 'Input', payload: { opr: 'Input' } },
  { id: 'Output', data: 'Output', payload: { opr: 'Output' } },
]);

type dropResultType = {
  removedIndex: number;
  addedIndex: number;
  payload: InstructionType;
};
const addInstruction = (dropResult: dropResultType) => {
  console.log(dropResult);
  const { addedIndex, removedIndex, payload: originInstruction } = dropResult;
  // todo 根据指令的opr在添加和删除时进行不同的操作
  // 删除指令
  if (removedIndex !== null) {
    userCodeList.value.splice(removedIndex, 1)[0];
  }
  // 添加指令
  if (addedIndex !== null) {
    const instructionToAdd = { ...originInstruction, id: nanoid() };
    userCodeList.value.splice(addedIndex, 0, instructionToAdd);
  }
};

const getAddPayload = (index: number) => {
  // console.log('add-instruction');
  return instructionList.value[index];
};
const getSwapPayload = (index: number) => {
  // console.log('swap-instruction');
  return userCodeList.value[index];
};
</script>

<style lang="scss" scoped>
.draggable-container {
  @apply overflow-y-auto h-full w-[200px] bg-gray-100 rounded-md shadow-md px-3 py-2;
}
.draggable-item {
  @apply bg-yellow-500 my-2 p-1 cursor-move rounded-md shadow-md;
}
</style>

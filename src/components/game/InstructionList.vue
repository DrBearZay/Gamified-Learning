<template>
  <!-- <div style="display: flex; justify-content: stretch; margin-top: 50px; margin-right: 50px"> -->
  <div class="flex gap-5 shadow-lg rounded-lg p-4 bg-gray-200">
    <div class="bg-gray-100 rounded-md shadow-md px-3 py-2">
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
    <div class="flex bg-gray-100 rounded-md shadow-md px-3 py-2 gap-2">
      <!-- 行号 -->
      <!-- <div class="flex flex-col">
        <div
          v-for="(rowIndex, index) of rowIndexList"
          :key="index"
          class="bg-yellow-500 my-2 p-1 rounded-md shadow-md cursor-default h-[32px]"
        >
          {{ rowIndex }}
        </div>
      </div> -->
      <Container
        group-name="1"
        :get-child-payload="getSwapPayload"
        @drop="onUserCodeDrop"
        :remove-on-drop-out="true"
        class="draggable-container"
      >
        <Draggable v-for="item in userCodeList" :key="item.id">
          <!-- todo 给每个L分配不同的颜色，jump的颜色和对应的L相同 -->
          <div class="draggable-item flex gap-2">
            <div>
              {{ item.data }}
            </div>
            <el-select
              v-if="Object.hasOwn(item, 'param')"
              v-model="item.param"
              placeholder="---"
              suffix-icon=""
              size="small"
              no-data-text="no Location"
              style="width: 40px"
            >
              <el-option v-for="item in LocationList" :key="item" :label="item" :value="item" />
            </el-select>
            <!-- <div v-if="Object.hasOwn(item, 'params')">
              {{ item.param }}
            </div> -->
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

type OprType = 'Input' | 'Output' | 'Jump' | 'Location' | 'Add' | 'Sub';
type InstructionType = {
  id: string | number;
  data: string;
  opr: OprType;
  param?: string;
};
// item1里复制出来的id不能写死
// 可用指令
const instructionList = ref<InstructionType[]>([
  { id: 'Input', data: 'Input', opr: 'Input' },
  { id: 'Output', data: 'Output', opr: 'Output' },
  { id: 'Location', data: 'Location', opr: 'Location' },
  { id: 'Jump', data: 'Jump', opr: 'Jump', param: '' },
  { id: 'Add', data: 'Add', opr: 'Add' },
  { id: 'Sub', data: 'Sub', opr: 'Sub' },
]);
// 用户代码
const userCodeList = ref<InstructionType[]>([
  { id: 'Input', data: 'Input', opr: 'Input' },
  { id: 'Output', data: 'Output', opr: 'Output' },
]);
// 代码行号列表
const rowIndexList = computed(() => {
  let indexList: string[] = [];
  let index = 0;
  userCodeList.value.forEach((item) => {
    if (item.opr !== 'Location') {
      // 行号至少展示两位数
      indexList.push(String(Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(index)));
      index++;
    } else {
      indexList.push('');
    }
  });
  return indexList;
});

// location列表
const LocationList = ref<string[]>([]);
const addLocation = () => {
  for (let index = 0; index < LocationList.value.length; index++) {
    const label = LocationList.value[index];
    const newLabel = 'L' + index;
    if (label !== newLabel) {
      LocationList.value.splice(index, 0, newLabel);
      return newLabel;
    }
  }

  const newLabel = 'L' + LocationList.value.length;
  LocationList.value.push(newLabel);
  return newLabel;
};

type dropResultType = {
  removedIndex: number;
  addedIndex: number;
  payload: InstructionType;
};

const getAddPayload = (index: number) => {
  // console.log('add-instruction');
  return instructionList.value[index];
};
const getSwapPayload = (index: number) => {
  // console.log('swap-instruction');
  return userCodeList.value[index];
};

const onUserCodeDrop = (dropResult: dropResultType) => {
  console.log(dropResult);
  const { addedIndex, removedIndex, payload: originInstruction } = dropResult;
  // todo 根据指令的opr在添加和删除时进行不同的操作
  // 删除指令
  if (removedIndex !== null) {
    removeInstruction(removedIndex);
  }
  // 添加指令
  if (addedIndex !== null) {
    addInstruction(addedIndex, originInstruction);
  }
};

const removeInstruction = (removedIndex: number) => {
  const removedInstruction = userCodeList.value.splice(removedIndex, 1)[0];

  switch (removedInstruction.opr) {
    case 'Location':
      LocationList.value = LocationList.value.filter((item) => {
        return item !== removedInstruction.data;
      });
      break;
  }
};

const addInstruction = (addedIndex: number, originInstruction: InstructionType) => {
  let instructionToAdd = { ...originInstruction, id: nanoid() };

  switch (originInstruction.opr) {
    case 'Location':
      if (instructionToAdd.data === 'Location') {
        instructionToAdd.data = addLocation();
      }
      break;
  }
  userCodeList.value.splice(addedIndex, 0, instructionToAdd);
};
</script>

<style lang="scss" scoped>
.draggable-container {
  @apply overflow-y-auto h-full w-[200px];
}
.draggable-item {
  @apply bg-yellow-500 my-2 p-1 cursor-move rounded-md shadow-md;
}
</style>

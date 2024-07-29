<template>
  <div style="display: flex; justify-content: stretch; margin-top: 50px; margin-right: 50px">
    <div style="margin-left: 50px">
      <Container
        behaviour="copy"
        group-name="1"
        :get-child-payload="getChildPayload1"
        class="pb-6 bg-yellow-400"
      >
        <Draggable v-for="item in items1" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
    <div style="margin-left: 50px">
      <Container
        group-name="1"
        :get-child-payload="getChildPayload2"
        @drop="onDrop2"
        :remove-on-drop-out="true"
        class="overflow-y-auto h-80 bg-yellow-400"
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
import { ref } from 'vue'
import { Container, Draggable } from 'vue3-smooth-dnd'

// item1里复制出来的id不能写死
const items1 = ref([
  { id: 1, data: 'Princess Mononoke' },
  { id: 2, data: 'Spirited Away' },
  { id: 3, data: 'My Neighbor Totoro' },
  { id: 4, data: "Howl's Moving Castle" }
])

const items2 = ref([
  { id: 1, data: 'Princess Mononoke2' },
  { id: 2, data: 'Spirited Away2' },
  { id: 3, data: 'My Neighbor Totoro2' },
  { id: 4, data: "Howl's Moving Castle2" }
])

type dropResultType = {
  removedIndex: number
  addedIndex: number
  payload: string
}
const onDrop2 = (dropResult: dropResultType) => {
  console.log(dropResult)
  items2.value = applyDrag(items2.value, dropResult)
}

const applyDrag = (arr: { id: number; data: string }[], dragResult: any) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = { id: arr.length + 1, data: payload }

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

const getChildPayload1 = (index: number) => {
  console.log('111')
  return items1.value[index].data
}
const getChildPayload2 = (index: number) => {
  console.log('222')
  return items2.value[index].data
}
</script>

<style lang="scss" scoped>
.draggable-item {
  @apply bg-yellow-500 my-2;
}
</style>

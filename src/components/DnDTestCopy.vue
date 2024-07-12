<template>
  <div style="display: flex; justify-content: stretch; margin-top: 50px; margin-right: 50px">
    <div style="margin-left: 50px; flex: 1">
      <Container behaviour="copy" group-name="1" :get-child-payload="getChildPayload1">
        <Draggable v-for="item in items1" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
    <div style="margin-left: 50px; flex: 1">
      <Container
        group-name="1"
        :get-child-payload="getChildPayload2"
        @drop="onDrop(items2, $event)"
      >
        <Draggable v-for="item in items2" :key="item.id">
          <div class="draggable-item">
            {{ item.data }}
          </div>
        </Draggable>
      </Container>
    </div>
    <div style="margin-left: 50px; flex: 1">
      <Container
        group-name="1"
        :get-child-payload="getChildPayload3"
        @drop="onDrop(items3, $event)"
      >
        <Draggable v-for="item in items3" :key="item.id">
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

const items1 = ref([
  { id: 1, data: 'Princess Mononoke' },
  { id: 2, data: 'Spirited Away' },
  { id: 3, data: 'My Neighbor Totoro' },
  { id: 4, data: "Howl's Moving Castle" }
])

const items2 = ref([
  { id: 1, data: 'Princess Mononoke' },
  { id: 2, data: 'Spirited Away' },
  { id: 3, data: 'My Neighbor Totoro' },
  { id: 4, data: "Howl's Moving Castle" }
])

const items3 = ref([
  { id: 1, data: 'Princess Mononoke' },
  { id: 2, data: 'Spirited Away' },
  { id: 3, data: 'My Neighbor Totoro' },
  { id: 4, data: "Howl's Moving Castle" }
])

const onDrop = (collection: any, dropResult: any) => {
  console.log(dropResult)
  collection.value = applyDrag(collection, dropResult)
}

const applyDrag = (arr: any, dragResult: any) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

const getChildPayload1 = (index: number) => {
  return items1.value[index]
}
const getChildPayload2 = (index: number) => {
  return items2.value[index]
}
const getChildPayload3 = (index: number) => {
  return items3.value[index]
}
</script>

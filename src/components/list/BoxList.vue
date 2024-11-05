<template>
  <h1>Lista en Vue</h1>
  <div>
    <input type="text" placeholder="Ingresa un item" v-model="item" @keypress.enter="sendItem" />
    <button @click="sendItem">Agregar</button>
  </div>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <button @click="deleteItem(item.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const item = ref('')
let items = ref<{ id: string; text: string }[]>([])

const sendItem = () => {
  items.value.push({ id: crypto.randomUUID(), text: item.value })
  item.value = ''
}

const deleteItem = (id: string) => {
  const updateItems = items.value.filter((item) => item.id !== id)
  items.value = updateItems
}
</script>

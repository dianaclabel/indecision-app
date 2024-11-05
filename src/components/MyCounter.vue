<template>
  <seccion>
    <h3>Counter : {{ counter }}</h3>
    <h3 data-testid="square-label">Square : {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button data-testid="btnDecrement" class="btn" @click="counter--">-1</button>
    </div>
  </seccion>
</template>

<script lang="ts" setup>
//utiliza composable
import { useCounter } from '@/composables/useCounter'

interface Props {
  value: number
}

const props = defineProps<Props>()

const { counter, squareCounter } = useCounter(props.value)
</script>
<style scoped>
.btn {
  @apply p-5 bg-red-500 rounded hover:bg-red-700 mr-2;
}
</style>

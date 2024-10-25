import { computed, ref } from 'vue'
//si definimos aquí el counter significa que tenemos un gestor basado en un composable, cuando utilicemos el composable iniciará en 10 todos.
// const counter =ref(10);

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue)
  //   const squareCounter = computed(() => {
  //   return counter.value * counter.value;
  // });
  return {
    counter,
    //readonly
    squareCounter: computed(() => {
      return counter.value * counter.value
    })
  }
}

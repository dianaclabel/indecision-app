import { test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import MyCounter from '../../src/components/MyCounter.vue'

describe('<My counter/> ', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5
      }
    })

    console.log(wrapper.html())
  })
})

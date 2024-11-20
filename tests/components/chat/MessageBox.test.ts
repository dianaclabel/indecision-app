import MessageBox from '@/components/chat/MessageBox.vue'
import { mount } from '@vue/test-utils'

describe('<MessageBox/>', () => {
  const wrapper = mount(MessageBox)

  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button svg').exists()).toBe(true)

    console.log(wrapper.find('button').attributes('class'))
  })

  test('emits sendmessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo'

    //Se le estan otorgando un valor a input[type="text"]
    await wrapper.find('input[type="text"]').setValue(message)
    // simula que se leda click al button 1 vez
    await wrapper.find('button').trigger('click')

    // wrapper.emitted nos mostrara todo lo que sa emitido en un array
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
    //vn es nuestro entorno de ejecución de vue
    expect((wrapper.vm as any).message).toBe('')
  })

  test('emits sendmessage event when keypress.enter is trigered with message value', async () => {
    const wrapper = mount(MessageBox)
    const input = wrapper.find('input')

    await input.trigger('keypress.enter')
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('sendMessage')).toBeFalsy()
  })
})

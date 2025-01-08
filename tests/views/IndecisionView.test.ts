import ChatMessages from '@/components/chat/ChatMessages.vue'
import MessageBox from '@/components/chat/MessageBox.vue'
import IndecisionView from '@/views/IndecisionView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import chatMessages from '@/components/chat/ChatMessages.vue'
import { log } from 'console'

const mockChatMessages = {
  template: '<div data-testid="mock-messages"> Mock ChatMessages </div>'
}

describe('<Indecision/>', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView)
    expect(wrapper.html()).toMatchSnapshot()

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true)
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true)
  })
  test('calls onMessages when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          chatMessages: mockChatMessages
        }
      }
    })
    //Simular el evento personalizado;
    const messagesBoxComponent = wrapper.findComponent(MessageBox)
    //vi model

    messagesBoxComponent.vm.$emit('sendMessage', 'Hola Mundo')

    await new Promise((r) => setTimeout(r, 150))

    expect(wrapper.html()).toMatchSnapshot()
  })
})

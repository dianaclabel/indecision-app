import ChatMessages from '@/components/chat/ChatMessages.vue'
import { mount } from '@vue/test-utils'

import ChatBubble from '@/components/chat/ChatBubble.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { describe, expect, test } from 'vitest'

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'Mundo', itsMine: false, image: 'http://hola-mundo.jpg' }
]

describe('<ChatMessages />', () => {
  test('renders chat messages correctly', () => {
    const wrapper = mount(ChatMessages, {
      props: { messages }
    })

    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' })
    expect(chatBubbles.length).toBe(messages.length)
  })
})

import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Hola Mundo',
      itsMine: true
    },
    {
      id: new Date().getTime(),
      message: '¿Quieres ir a tomar café?',
      itsMine: true
    },
    {
      id: new Date().getTime() + 1,
      message: 'No!!',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/9-dc99c0e3c066b28d3a12262692cd5432.gif'
    }
  ])

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text
    })
  }
  return {
    // Properties
    messages,
    //Methods
    onMessage
  }
}

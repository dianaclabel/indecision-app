import { sleep } from '@/helpers/sleep'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no.response'
import { ref } from 'vue'

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    // {
    //   id: new Date().getTime(),
    //   message: 'Hola Mundo',
    //   itsMine: true
    // },
    // {
    //   id: new Date().getTime(),
    //   message: '¿Quieres ir a tomar café?',
    //   itsMine: true
    // },
    // {
    //   id: new Date().getTime() + 1,
    //   message: 'No!!',
    //   itsMine: false,
    //   image: 'https://yesno.wtf/assets/no/9-dc99c0e3c066b28d3a12262692cd5432.gif'
    // }
  ])

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api')
    const data = (await resp.json()) as YesNoResponse

    return data
  }

  const onMessage = async (text: string) => {
    if (text.length === 0) return

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text
    })

    //Evaluar si termina con un ?
    if (!text.endsWith('?')) return

    await sleep(1.5)
    const { answer, image } = await getHerResponse()

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image
    })
  }
  return {
    // Properties
    messages,
    //Methods
    onMessage
  }
}

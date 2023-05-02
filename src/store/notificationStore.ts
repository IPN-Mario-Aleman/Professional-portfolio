import { create } from 'zustand'

interface INotification {
    visible: boolean
    text: string
    updateVisible: (setVisibile: boolean, setText: string) => void
}

export const useNotification = create<INotification>((set) => ({
  visible: false,
  text: 'string',
  updateVisible: (
    setVisibile: boolean,
    setText: string) => set(
    state => (
      { ...state, visible: setVisibile, text: setText })
  )
}))

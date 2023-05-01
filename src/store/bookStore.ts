import { create } from 'zustand'

interface ISkills {
    img: string
    title: string
    data: string
    info: string
    popUp: boolean
    updatePopUp: (openPopUp: boolean, newImg: string, newTitle: string, newData: string, newInfo: string) => void
}

export const useBookStore = create<ISkills>((set) => ({
  img: '',
  popUp: false,
  title: '',
  data: '',
  info: '',
  updatePopUp: (openPopUp: boolean, newImg: string, newTitle: string, newData: string, newInfo: string) => set(state => ({ ...state, popUp: openPopUp, img: newImg, title: newTitle, data: newData, info: newInfo }))
}))

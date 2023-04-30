import { create } from 'zustand'

interface ISkills {
    img: string
    popUp: boolean
    updatePopUp: (openPopUp: boolean, newImg: string) => void
}

export const useBookStore = create<ISkills>((set) => ({
  img: '',
  popUp: false,
  updatePopUp: (openPopUp: boolean, newImg: string) => set(state => ({ ...state, popUp: openPopUp, img: newImg }))
}))

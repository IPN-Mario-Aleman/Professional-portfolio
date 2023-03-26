import { create } from 'zustand'

interface IBook {
    img: string
    popUp: boolean
    updatePopUp: (openPopUp: boolean, newImg: string) => void
}

export const useBookStore = create<IBook>((set) => ({
  img: '',
  popUp: false,
  updatePopUp: (openPopUp: boolean, newImg: string) => set(state => ({ ...state, popUp: openPopUp, img: newImg }))
}))

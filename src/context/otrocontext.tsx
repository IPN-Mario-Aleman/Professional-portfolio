// import { DarkTheme, LightTheme } from '@src/utils/themes'
// import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

// interface props {
//     children: React.ReactNode;
// }

// type ThemeContextType = {
//     theme: string | null
//     toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | null>(null)

// const ThemeProvider = ({ children }:props) => {
//   const [theme, setTheme] = useState<string>('')
//   // const [systemTheme, setSystemTheme] = useState<boolean | null>(null)

//   /* Se actualiza el theme del primer renderizado busca primero si tiene un selección actual en el localStorage
//     si no busca la del sistema.
//   */
//   useEffect(() => {
//     const ThemeStorage = localStorage.getItem('theme')
//     if (ThemeStorage) {
//       setTheme('light')
//     } else {
//       const runColorMode = (fn: any) => {
//         if (!window.matchMedia) {
//           return
//         }

//         const query = window.matchMedia('(prefers-color-scheme: dark)')

//         fn(query.matches)

//         query.addEventListener('change', (event) => fn(event.matches))
//       }

//       runColorMode((isDarkMode: boolean) => {
//         if (isDarkMode) {
//           setTheme('dark')
//           // setSystemTheme(true)
//         } else {
//           setTheme('light')
//         }
//       })
//     }
//   }, [])

//   const toggleTheme = useCallback(() => {
//     theme === 'light'
//       ? setTheme('dark')
//       : setTheme('light')
//   }, [theme])

//   const handleTheme = (theme: any) => {
//     // const styleTag = document.createElement('style')

//     const root = document.querySelector<HTMLElement>(':root')!

//     for (const key in theme) {
//       root?.style.setProperty(key, theme[key])
//       console.log('maping', key, theme[key])
//     }
//   }

//   useEffect(() => {
//     if (theme === 'light') {
//       handleTheme(LightTheme)
//     } else {
//       handleTheme(DarkTheme)
//     }
//   }, [theme])

//   const value = useMemo<ThemeContextType>(() => ({ theme, toggleTheme }), [theme, toggleTheme])

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export const useTheme = () => useContext(ThemeContext) as ThemeContextType

// export default ThemeProvider

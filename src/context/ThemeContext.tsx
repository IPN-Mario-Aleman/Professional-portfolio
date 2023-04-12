import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

interface props {
    children: React.ReactNode;
}

type ThemeContextType = {
    theme: string | null | undefined
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider = ({ children }:props) => {
  // const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined)

  // const handleToggle = useCallback(() => {
  //   darkTheme === true
  //     ? setDarkTheme(false)
  //     : setDarkTheme(true)
  // }, [darkTheme])
  // // const handleToggle = useCallback(darkMode: boolean) => {
  // //   setDarkTheme(darkMode)
  // // }

  const [theme, setTheme] = useState<string | undefined>(undefined)

  const storeUserSetPreference = (pref: string) => {
    localStorage.setItem('theme', pref)
  }

  useEffect(() => {
    const root = document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    )
    initialColorValue === 'dark'
      ? setTheme('dark')
      : setTheme('light')
  }, [])

  useEffect(() => {
    const root = document.documentElement

    if (theme !== undefined) {
      if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark')
        storeUserSetPreference('dark')
      } else {
        root.setAttribute('data-theme', 'light')
        storeUserSetPreference('light')
      }
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light')
  }, [theme])

  const handleTheme = (theme: string) => {
    const root = document.querySelector<HTMLElement>(':root')!
    root.setAttribute('data-theme', theme)
    storeUserSetPreference(theme)
  }

  useEffect(() => {
    if (theme === 'light') {
      handleTheme('light')
    } else {
      handleTheme('dark')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const value = useMemo<ThemeContextType>(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) as ThemeContextType

export default ThemeProvider

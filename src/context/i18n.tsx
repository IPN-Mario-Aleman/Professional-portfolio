import { I18NContextType, Language } from '@src/models/i18n'
import en from '@src/translations/en.json'
import es from '@src/translations/es.json'
import { useRouter } from 'next/router'
import React, { createContext, useCallback, useContext } from 'react'

interface props {
  children: React.ReactNode
}

const I18NContext = createContext<I18NContextType | undefined>(undefined)
const languages: Language = { es, en }

const I18NProvider = ({ children }: props) => {
  const { locale } = useRouter()
  const local = locale !== undefined ? locale : ''

  const t = useCallback((key: string, ...args: string[]) => {
    let translation = languages[local as keyof typeof languages][key as keyof Language['es']]
    if (args.length === 0) return translation
    args.forEach((value, index) => {
      translation = translation.replace(`\${${index + 1}}`, value)
    })
    return translation
  }, [local])

  return (
    <I18NContext.Provider value={{ t }}>
      {children}
    </I18NContext.Provider>
  )
}

export const useI18N = () => {
  const context = useContext(I18NContext)
  if (context === undefined) {
    throw new Error('useI18N must be used within a I18NProvider')
  }
  return context
}

export default I18NProvider

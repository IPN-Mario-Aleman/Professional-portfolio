import I18NProvider from '@src/context/i18n'
import ThemeProvider from '@src/context/ThemeContext'
import '@src/styles/globals.css'
import '@src/styles/system_design.scss'
import type { AppProps } from 'next/app'

import { Assistant } from 'next/font/google'

const assistant = Assistant({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <I18NProvider>
      <ThemeProvider>
        <style jsx global>
          {`
            html {
              font-family: ${assistant.style.fontFamily};
              overflow-x: hidden;
            }
          `}
        </style>
        <Component {...pageProps} />
      </ThemeProvider>
    </I18NProvider>
  )
}

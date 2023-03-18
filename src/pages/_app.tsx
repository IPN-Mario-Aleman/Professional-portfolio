import I18NProvider from '@src/context/i18n'
import ThemeProvider from '@src/context/ThemeContext'
import '@src/styles/globals.css'
import '@src/styles/system_design.scss'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <I18NProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </I18NProvider>
  )
}

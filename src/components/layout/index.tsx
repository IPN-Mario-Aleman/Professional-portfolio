import React from 'react'
import Header from './Header'
import { useTheme } from '@src/context/ThemeContext'
import Footer from './Footer'

interface props {
  children: React.ReactNode
}

const Layout = ({ children }: props) => {
  // const { theme } = useTheme()
  // console.log(theme)
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout

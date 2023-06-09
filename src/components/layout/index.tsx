import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface props {
  children: React.ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      <main style={{ overflowX: 'hidden' }}>{children}</main>
      <Footer />
    </>
  )
}
export default Layout

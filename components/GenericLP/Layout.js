import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <>
    <Header></Header>
    {children}
    <Footer></Footer>
    <button className="scroll-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></button>
    </>
  )
}

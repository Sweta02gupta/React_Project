import React from 'react'
import Header from './components/Header/Footer/Header'
import Footer from './components/Header/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
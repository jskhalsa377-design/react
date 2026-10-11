//above and below outlet the things will remain same and
//changes will be made in outle part
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
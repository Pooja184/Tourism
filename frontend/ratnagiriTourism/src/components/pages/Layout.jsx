import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const Layout = () => {
  return (
    <>
      <Navbar/>
      {/* Error className:"container mx-auto" */}
      <div>
        <Outlet/>
      </div>
      <Footer/>

    </>
  )
}

export default Layout

import React from 'react'
import Header from './src/components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/Footer'

function Layout() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Header/>

        <Outlet /> 

        <Footer/>
    </div>
  )
}

export default Layout
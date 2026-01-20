import React from 'react'
import Navbar from '../Navbar/Navbar'
import AppRoute from '../Routes/AppRoute'
import Footer from '../Footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <AppRoute/>
        <Footer/>
    
    
    </div>
  )
}

export default MainLayout
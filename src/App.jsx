import React from 'react'
import MainLayout from './components/Layout/MainLayout'
import { BrowserRouter } from 'react-router-dom'





const App = () => {
  return (
    <div >
    
        <BrowserRouter>
      <MainLayout />
      
        </BrowserRouter>
    
    </div>
  )
}

export default App

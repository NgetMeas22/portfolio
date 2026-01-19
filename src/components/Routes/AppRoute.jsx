import React from 'react'
import Home from '../Page/Home'
import { About } from '../Page/About'
import Project from '../Page/Project'
import Skills from '../Page/Skills'
import Contact from '../Page/Contact'
import { Routes, Route } from 'react-router-dom'

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
            

    </div>
  )
}

export default AppRoute

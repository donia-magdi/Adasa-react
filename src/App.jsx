import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog/Blog'




export default function App() {
  return (
   < BrowserRouter> 
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/blog" element={<Blog />} />
     <Route path="/blog/:id" element={<blogcards/>}/> 

        
   </Routes>
   <Footer/>
   </BrowserRouter>
 
  )
}

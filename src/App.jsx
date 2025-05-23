import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import {Toaster} from 'react-hot-toast'



const App = () => {
  return (
    <>
    <div>
          <Navbar/>
    <Home/>
    <About/>
    <Projects/> 
    <Experience/>
    <Contact/>
    <Footer/>
      </div> 
      <Toaster/>  
    </>
  )
}

export default App

import React from 'react'

//import css
import './style/style/style.css'

//import components
import Header from './components/Header.jsx'
import Service from './components/Service.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Info from './components/Info.jsx'
import Proceeds from './components/Proceeds.jsx'


const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Info/>
      <About/>
      <Service/>
      <Proceeds/>

      <Contact/>
      <Footer/>
    </>
  )
}

export default App
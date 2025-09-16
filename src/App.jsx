import React from 'react'

//import css
import './style/style/style.css'

//import components
import Header from './components/Header.jsx'
import Service from './components/Service.jsx'
import About from './components/About.jsx'
import Carrousel from './components/CarruselReviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Info from './components/Info.jsx'
import Inf from './components/Inf.jsx'
import Clinics from './components/Clinics.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

const App = () => {
  return (
    <>
      <Header/>
    <WhatsAppButton/>
      <Hero/>
      <Info/>
      <About/>
      <Service/>
      <Inf/>
      <Clinics/>
      <Carrousel/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App


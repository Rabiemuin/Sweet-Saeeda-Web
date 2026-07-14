import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Features from './components/Features'
import Story from './components/Story'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Footer from './components/Footer'
import FloatingBadge from './components/FloatingBadge'
import MobileCTA from './components/MobileCTA'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="menu">
        <Menu />
      </div>
      <Features />
      <Story />
      <Reviews />
      <Gallery />
      <Location />
      <Footer />
      <FloatingBadge />
      <MobileCTA />
    </div>
  )
}

export default App

import { useState } from 'react'
import './index.css'
import { Navbar, Hero, Services, About, Tours, Footer  } from './components'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App

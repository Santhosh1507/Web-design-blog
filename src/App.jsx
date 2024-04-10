import React from 'react'
import './App.css'
import Navbar from './components/Header-page/Navbar'
import Footer from './components/Footer-page/Footer'
import Heading from './components/Main-page/Heading-page/Heading'

function App() {

  return (
    <>
      <div >
        <Navbar />
        <Heading />

        <Footer />
      </div>
    </>
  )
}

export default App
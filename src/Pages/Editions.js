import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Editions.css'
import * as AOS from 'aos'

const Editions = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='wrapper'>
      <Navbar />
      <div className='content'>
        <div className='editions'>
          <div className='edition' data-aos="fade-in" data-aos-duration="1000">
            Python
          </div>
          <div className='edition' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            JS
          </div>
          <div className='edition' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
            Rust
          </div>
        </div>
        <div className='parity' id="fourthCard" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
          parity
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Editions

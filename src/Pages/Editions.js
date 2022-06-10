import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Editions.css'
import * as AOS from 'aos'
import melvin from '../Assets/Melvin.png'
import melvinjs from '../Assets/MelvinJS.png'
import melvinrs from '../Assets/MelvinRS.png'

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
            <img className="edition-logo" src={melvin} alt="Melvin Logo" />
            Python
          </div>
          <div className='edition' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
          <img className="edition-logo" src={melvinjs} alt="MelvinJS Logo" />
            JS
          </div>
          <div className='edition' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
            <img className="edition-logo" src={melvinrs} alt="MelvinRS Logo" />
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

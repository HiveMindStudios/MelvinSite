import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import * as AOS from 'aos'
import '../Styles/Commands.css'

const Commands = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='wrapper'>
    <Navbar />
    <div className='content'>
      <div className='commands-wrapper' id="fourthCard" data-aos="fade-in" data-aos-duration="1500">
        <h3>Available Commands</h3>
        <div className='command' data-aos="fade-in" data-aos-duration="500" data-aos-delay="500">
          <span>Placeholder Command - lorem ipsum</span>
        </div>
        <div className='command' data-aos="fade-in" data-aos-duration="500" data-aos-delay="600">
          <span>Placeholder Command - lorem ipsum</span>
        </div>
        <div className='command' data-aos="fade-in" data-aos-duration="500" data-aos-delay="700">
          <span>Placeholder Command - lorem ipsum</span>
        </div>
        <div className='command' data-aos="fade-in" data-aos-duration="500" data-aos-delay="800">
          <span>Placeholder Command - lorem ipsum</span>
        </div>
        <div className='command' data-aos="fade-in" data-aos-duration="500" data-aos-delay="900">
          <span>Placeholder Command - lorem ipsum</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Commands

import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import * as AOS from 'aos'
import '../Styles/Home.css'
import logo from '../Assets/Melvin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Home = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='wrapper'>
      <Navbar />
      <div className='content'>
        <div className='intro' data-aos="fade-in" data-aos-duration="1500">
          <img src={logo} alt="Melvin Logo" className='brand-img' />
          <h1>Melvin</h1>
          <h3>A multipurpose Discord Bot</h3>
          <div className='button-container'>
            <a className='intro-link primary' href="https://discord.com/" target="_blank" rel='noreferrer'>
              <i className='fa fa-add'></i>
              Invite
            </a>
            <a className='intro-link secondary' href="https://github.com/eRgo35/MelvinJS" target="_blank" rel="noreferrer">
              <i className='fa-brands fa-github'></i>
              GitHub
            </a>
          </div>
          <div className='explore'>
            <span>see more</span>
            <FontAwesomeIcon icon={solid('chevron-down')} />
          </div>
        </div>
        <div className='cards music' data-aos="fade-right" data-aos-duration="1500" data-aos-anchor="#secondCard">
          music
        </div>
        <div id="secondCard" className='cards metar' data-aos="fade-left" data-aos-duration="1500" data-aos-anchor="#thirdCard">
          metar
        </div>
        <div id="thirdCard" className='cards fun' data-aos="fade-right" data-aos-duration="1500" data-aos-anchor="#fourthCard">
          fun
        </div>
        <div id="fourthCard" className='cards dice' data-aos="fade-left" data-aos-duration="1500">
          dice
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

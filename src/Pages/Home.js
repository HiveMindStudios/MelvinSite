import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import * as AOS from 'aos'
import '../Styles/Home.css'
import logo from '../Assets/Melvin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Home = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const cards = useRef()

  const scrollContent = () => {
    cards.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='wrapper'>
      <Navbar />
      <div className='content'>
        <div className='intro' data-aos="fade-in" data-aos-duration="1500">
          <img src={logo} alt="Melvin Logo" className='brand-img' />
          <h1>Melvin</h1>
          <h3>A multipurpose Discord Bot</h3>
          <div className='button-container'>
            {/* Coming Soon */}
            {/* <a className='intro-link primary' href="https://discord.com/" target="_blank" rel='noreferrer'>
              <i className='fa fa-add'></i>
              Invite
            </a> */}
            <a className='intro-link primary' href="https://github.com/eRgo35/MelvinJS" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className='btn-icon' icon={brands('github')}></FontAwesomeIcon>
              <span>Source Code</span>
            </a>
          </div>
          <div className='explore' onClick={scrollContent}>
            <span>see more</span>
            <FontAwesomeIcon icon={solid('chevron-down')} />
          </div>
        </div>
        <div className='cards music' data-aos="fade-right" data-aos-duration="1500" data-aos-anchor="#delayedCard" ref={cards}>
          <FontAwesomeIcon className='card-icon' icon={solid('music')}></FontAwesomeIcon>
          <div className='card-desc'>
            <h1>Music</h1>
            <span>lorem ipsum...</span>
          </div>
        </div>
        <div id="delayedCard" className='cards metar' data-aos="fade-left" data-aos-duration="1500">
          <FontAwesomeIcon className='card-icon' icon={solid('cloud-rain')}></FontAwesomeIcon>
          <div className='card-desc'>
            <h1>Metar</h1>
            <span>lorem ipsum...</span>
          </div>
        </div>
        <div className='cards fun' data-aos="fade-right" data-aos-duration="1500" data-aos-anchor="#delayedCard" data-aos-delay="200">
          <FontAwesomeIcon className='card-icon' icon={solid('wand-magic-sparkles')}></FontAwesomeIcon>
          <div className='card-desc'>
            <h1>Fun</h1>
            <span>lorem ipsum...</span>
          </div>
        </div>
        <div className='cards dice' data-aos="fade-left" data-aos-duration="1500" data-aos-anchor="#delayedCard" data-aos-delay="400">
          <FontAwesomeIcon className='card-icon' icon={solid('dice-d20')}></FontAwesomeIcon>
          <div className='card-desc'>
            <h1>Dice</h1>
            <span>The most sophisticated rolling algorithm in Discord history!</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

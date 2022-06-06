import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'

const Footer = () => {
  const version = {
    melvin: {
      py: '1.6.1',
      js: '1.6.11',
      rs: '0.0.0'
    },
    website: '1.0.0'
  }

  return (
    <div className='navigation' data-aos="flip-down" data-aos-duration="800" data-aos-delay="300" data-aos-anchor="#fourthCard">
      <div className='version'>
        <a className="footer-link no-underline software" href="https://github.com/VectorKappa/Melvin/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('python')} />
          <span>{version.melvin.py}</span>
        </a>
        <a className="footer-link no-underline software" href="https://github.com/eRgo35/MelvinJS/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('js')} />
          <span>{version.melvin.js}</span>
        </a>
        <a className="footer-link no-underline software" href="https://github.com/VectorKappa/Melvin/tree/rs" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('rust')} />
          <span>{version.melvin.rs}</span>
        </a>
        <a className="footer-link no-underline software" href="https://github.com/eRgo35/MelvinSite" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={solid('globe')} />
          <span>{version.website}</span>
        </a>
      </div>
      <div className='details'>
        <div className='links'>
          <Link className='footer-link' to="/contact">Contact</Link>
          <Link className='footer-link' to="/contact">Status</Link>
          <Link className='footer-link' to="/contact">Privacy</Link>
        </div>
        <div className='copy'>&copy; {new Date().getFullYear()} Melvin Team</div>
      </div>
    </div>
  )
}

export default Footer

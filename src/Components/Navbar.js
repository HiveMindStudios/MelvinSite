import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navigation' data-aos="fade-in" data-aos-duration="1500">
      <div className='nav-left'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/editions">Editions</Link>
        <Link className='nav-link' to="/commands">Commands</Link>
      </div>
      <div className='nav-right'>
        <a className='nav-link-btn' href="https://github.com/eRgo35/MelvinJS" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('github')} />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

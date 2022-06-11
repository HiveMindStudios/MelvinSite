import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import * as AOS from 'aos'
import '../Styles/Commands.css'
import docs from '../Assets/documentation.json'

// TODO: Fetch the latest documentation.json from Master Melvin GitHub Repository:
// TODO: https://raw.githubusercontent.com/eRgo35/MelvinJS/main/documentation.json

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
          {console.log(docs)}
          {Object.keys(docs).map((doc, index) => {
            return (
              <div className='command' key={index} data-aos="fade-in" data-aos-duration="500" data-aos-delay={100 * 0.5 * (index + 1)} data-aos-anchor=".commands-wrapper">
                <span><b>${doc}</b> - {docs[doc].description}</span>
                <code>${docs[doc].syntax}</code>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Commands

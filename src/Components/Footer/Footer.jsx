import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fessbook from '@iconscout/react-unicons/icons/uil-fessbook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave  from "../../image/wave.png"
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt=' ' style={{width:'100%'}}/>
      <div className='f-content'>
      <span>Manish.sviet02@gmail.com</span>
      <div className='f-icons'>
        <Insta color='white' size='3rem'/>
        <Fessbook color='white' size='3rem'/>
        <Github color='white' size='3rem'/>
      </div>

      </div>
    </div>
  )
}

export default Footer

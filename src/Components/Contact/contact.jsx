import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <div className='contact-form'>
    <div className='w-left'>
    <div className='awesome'>
     <span>Get in touch </span>
     <span>Contact me</span>

    </div>
    </div>
    <div className='c-right'>
          <form >
            <input type="text" name="user" className="user" placeholder="Name" />
            <input type="email" name="user" className="user" placeholder="Email" />
            <input type="text" name="user" className='user' placeholder="Subject" />
            <textarea name="message" className='user' placeholder="Message"></textarea>
            <input type="submit" value="Send"  className='button s-button'/>
            <div className='blur c-blur1' style={{background:'var(--purple)'}}>
            </div>
          </form>
    </div>
    </div>
  )
}

export default contact

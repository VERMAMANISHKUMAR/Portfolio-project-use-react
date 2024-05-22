import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
          const form = useRef("1");
          const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('service_7fv589n', 'template_m76l9vi', form.current, {
                publicKey: 'LYI-zBx3UJVCvEqYb',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
          };
          return (
            <div className='contact-form'>
            <div className='w-left'>
            <div className='awesome'>
             <span>Get in touch </span>
             <span>Contact me</span>
             <div className='blur c-blur2' style={{background:"skyblue"}}></div>
            </div>
            </div>
            
            <div className='c-right'>
                  <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user" className="user" placeholder="Name" />
                    <input type="email" name="user" className="user" placeholder="Email" />
                    {/* <input type="text" name="user" className='user' placeholder="Subject" /> */}
                    <textarea name="message" className='user' placeholder="Message"></textarea>
                    <input type="submit" value="Send"  className='button s-button'/>
                    <div className='blur c-blur1' style={{background:'var(--purple)'}}>
                    </div>
                  </form>
            </div>
            </div>
          )
        }

export default Contact

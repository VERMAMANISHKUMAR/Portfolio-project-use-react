import React from 'react'
import './Services.css'
import Resume from './Resume.pdf'

const Services = () => {
  return (
    <div className='services'>
    {/* left side content */}
    <div className='awesome'>
    <span>My awesome</span>
    <span>services</span>
    <span>
Lorem ispum is simpley dummy text of printing of printing Lorem<br/>
ispum is simpley dummy text of printing
    </span>
    <a href={Resume} download>
    <button className='button s-button'>Download CV</button>
    </a>
    <div className='blur s-blur2' style={{background:'#ABF1FF94'}}></div>

    </div>
    {/* Right side content */}
    <div className='cards-1'>
      <div>
       <img src="img/heartemoji.png" alt="icon is missing" className='heatemoji'/>
         <span>Detail</span><br/>
         
         <span>Figma, Sketch, photoshop, Adobe, Adobe xd </span>

         <button className='c-button'>LEARN MORE</button>
  
         </div>
         <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

    </div>

    <div className='cards-2'>
      <div>
       <img src="img/Glasses.png" alt="icon is missing" className='Glasses'/>
         <span>Developer</span><br/>
         
         <span>Html, Css, JavaScript, React</span>

         <button className='c-button'>LEARN MORE</button>
  
         </div>
         <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

    </div>
    {/* card -3 */}
    <div className='cards-3'>
      <div>
       <img src="img/Humble.png" alt="icon is missing" className='Humble'/>
         <span>UI/UX</span><br/>
         
         <span>Lorem ispum dummy text are usually use.</span>
        

         <button className='c-button'>LEARN MORE</button>
  
         </div>
         <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>

    </div>
   
    </div>
  )
}

export default Services

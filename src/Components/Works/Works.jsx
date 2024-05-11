import React from 'react' 
import './Works.css'

const Works = () => {
  return (
    <div className='works'>
     <div className='awesome'>
    <span>Works for All these</span>
    <span>Brand & clients</span>
    <span>
Lorem ispum is simpley dummy text of printing of printing Lorem<br/>
ispum is simpley dummy text of printing
 <br/>
 ispum is simpley dummy text of printing
 <br/>
 Lorem ispum is simpley dummy text

    </span>
    
    <button className='button s-button'>Hire me</button>

    <div className='blur-1 s-blur-3' style={{background:'#ABF1FF94'}}></div>

    </div>
       
       {/* right side componet */}
       <div className='w-right'>
       <div className='w-mainCircle'>
          <div className='w-secCircle'>
          <img src="img/Upwork.png" alt="icon is missing" className='Glasses'/>
          </div>
          <div className='w-secCircle'>
          <img src="img/Fiverr.png" alt="icon is missing" className='Glasses'/>
          </div>
          <div className='w-secCircle'>
          <img src="img/Amazon.png" alt="icon is missing" className='Glasses'/>
          </div>
          <div className='w-secCircle'>
          <img src="img/Shopify.png" alt="icon is missing" className='Glasses'/>
          </div>
          <div className='w-secCircle'>
          <img src="img/Facebook.png" alt="icon is missing" className='Glasses'/>
          </div>
       </div>
       {/* background Circles */}
       <div className='w-backCircle blueCircle'> </div>
       <div className='w-backCircle yellowCircle'> </div>

       </div>

    </div>
  )
}

export default Works

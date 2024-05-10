import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'



const Intro = () => {
  return (
    <div className='intro'>
    <div className='i-left'>
    <div className='i-name'>
          <span>Hy! I Am</span>
          <span>Manish Kumar Verma</span>
          <span>Frontend Developer with high level of experience in web designing and development, <br/>producting the Quality work</span>
    </div>
    <button className=' button i-button'>Hire me</button>
    <div className='i-icons'>
    <img src="img/github.png" alt="icon is missing"/>
    <img src="img/linkedin.png" alt="icon is missing"/>
    <img src="img/instagram.png" alt="icon is missing"/>
    
    </div>


    </div>
    <div className='i-right'>
    <img src="img/Vector1.png" alt="icon is missing"/>
    <img src="img/Vector2.png" alt="icon is missing"/>
    <img src="img/boy.png" alt="icon is missing"/>
    <img src="img/glassesimoji.png" alt="icon is missing"/>
         <div>
          <FloatingDiv/>
          </div>
          <div className='thumbup'>
     <img src="img/thumbup.png" alt="icon is missing" className='thum'/>
      <span>
          Best Desing <br/>
          Award
      </span>

     </div>
     {/* Blur divs */}
     <div className='blur'style={{background:"rgb(238 210 255)"}}>
     </div>
     <div className='blur'style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
    
    </div>
    </div>
  )
}

export default Intro

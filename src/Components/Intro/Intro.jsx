import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

import {motion} from 'framer-motion'


const Intro = () => {
  const transition={duration :2, type:'spring'}
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
    <motion.img 
    initial={{left:'-36%'}}
    whileInView={{left:'-24%'}}
    transition={transition}
    
    src="img/glassesimoji.png" alt="icon is missing"/>
         <div>
          <FloatingDiv/>
          </div>
          <motion.div 
         initial={{ left: '20rem', top: '18rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          className='thumbup'>
       <img src="img/thumbup.png" alt="icon is missing" className='thum'/>
       <span>
          Best Desing <br/>
          Award
      </span>

     </motion.div>
     {/* Blur divs */}
     <div className='blur'style={{background:"rgb(238 210 255)"}}>
     </div>
     <div className='blur'style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
    
    </div>
    </div>
  )
}

export default Intro

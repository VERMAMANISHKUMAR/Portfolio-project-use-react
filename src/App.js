//import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Email from './Components/Email&Contact/Email';
import Footer from './Components/Footer/Footer';


function App() {

  
  return (
    
     
    <div className='App'>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Email/>
    <Footer/>
  
    </div>
  );
}

export default App;

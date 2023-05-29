import React from 'react';
import '../CSS/banner.css';
import codepic from '../media/codepic.png';


const Banner = () => {
  return (
    <img className='main-banner' src={codepic} alt='codepic'/>
  )
}

export default Banner;
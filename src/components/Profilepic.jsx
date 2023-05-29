import React from 'react';
import '../CSS/profpic.css';
import profpic from '../media/profpic.jpg';

const Profilepic = () => {
  return (
    <img className='profpic' src={profpic} alt='profpic' />
  )
}

export default Profilepic;
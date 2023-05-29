import React from 'react';
import '../CSS/button.css';

const Button = ({buttontext, onClick}) => {
  return (
    <button value='download' className='res-button' onClick={onClick}>{buttontext}</button>
  )
}

export default Button;
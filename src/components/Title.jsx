import React from 'react';
import '../CSS/title.css';

const Title = ({name}) => {
  return (
    <h2 className='name-title'>{name}</h2>
  )
}

export default Title;
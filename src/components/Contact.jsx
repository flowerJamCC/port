import React from 'react';
import { useState } from 'react';
import '../CSS/contact.css';

const Contact = () => {
    const [ link, setLink ] = useState(false);
    const [ mail, setMail ] = useState(false);
    const [ phone, setPhone ] = useState(false);

    const handleLink = () => {
        setLink(true);
        setMail(false);
        setPhone(false);
    };

    const handleMail = () => {
        setMail(true);
        setLink(false);
        setPhone(false);
    };

    const handlePhone = () => {
        setPhone(true);
        setLink(false);
        setMail(false);
    };

  return (
    <div className="contacts-container">
        <div className="contacts-button-container">
        <button className='contact-button' onClick={handleLink}>Linked In</button>
        <button className='contact-button' onClick={handleMail}>Gmail</button>
        <button className='contact-button' onClick={handlePhone}>Phone</button>
        </div>
        <p className='contacts-reveal'>
        {link === true ? 'http://www.linkedin.com/in/ghassan-hasan-3a1731275/' : mail === true ? 'Ghassaan31@Gmail.com' : phone === true ? '0593637780' : null}
        </p>
    </div>
  )
}

export default Contact;
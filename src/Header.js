import React, { useState } from 'react';
import './Header.css'

import socialImage from './assets/social.svg'
import FyteLogo from './components/ui/FyteLogo/FyteLogo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.toggle('open');
    }
  };

  return (
    <header className="head">
      <div className="head-inner">
        <div className="">
          <img src={socialImage} className="logo" alt='Telegram' />
        </div>
        <div className="">
          <FyteLogo width={40} height={40} className='logo' alt="FyteBit" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <div className="w-6 rounded bar"></div>
          <div className="w-6 rounded bar"></div>
          <div className="w-6 rounded bar"></div>
        </button>
      </div>
      {isOpen && (
            <div className="burger">
              <div className="mainLink">
                <a href="/">Главная</a>
              </div>
              
              <div className="about">
                <a href="/about">О нас</a>
              </div>

              <div className="createEvent">
                <a href="/addEvent">Добавить ивент</a>
              </div>
            </div>
      )}
    </header>
  );
};

export default Header;
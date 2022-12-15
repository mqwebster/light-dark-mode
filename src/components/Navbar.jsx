import React from 'react';
import logo from '/react.svg';

export default function Navbar(props) {
  return (
    <nav className={props.isDark ? 'dark' : ''}>
      <div className='nav-logo'>
        <img src={logo} alt='React Logo' className='nav-logo__img' />
        <span>ReactFacts</span>
      </div>

      <div className='nav-toggle'>
        <span className='nav-toggle__text-light'>Light</span>
        <div className='nav-toggle__slider' onClick={props.toggle}>
          <div className='nav-toggle__slider-circle'></div>
        </div>
        <span className='nav-toggle__text-dark'>Dark</span>
      </div>
    </nav>
  );
}

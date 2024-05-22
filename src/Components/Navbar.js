import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          LOGO
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
              Contactus
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
              Portfolio
            </Link>
         </li>
         
         
        </ul>
        <Link to='/hireus ' onClick={closeMobileMenu}>
        <button class="my-button">Hireus</button>
        </Link>
        
        
      </nav>
    </>
  );
}

export default Navbar;

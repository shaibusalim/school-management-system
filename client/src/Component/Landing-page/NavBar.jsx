import { useState, useEffect } from 'react';
import React from 'react'
import './NavBar.css'


function NavBar() {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); 
    } else {
      setIsVisible(true); 
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div  className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
        <div className='navbar-content'>
        <h1>Adminity</h1>
            <nav className='navbar'>
                  <div className='hamburger' onClick={toggleMenu}>
                      &#9776; {/* Hamburger icon */}
                   </div>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>CONTACT</a></li>
                </ul>
                <div className='search-bar'>
                     <input type='page-search' placeholder='Search here....'/>

                      <button>Search</button>
                </div>
            </nav>
        </div>  
    </div>
  )
}

export default NavBar
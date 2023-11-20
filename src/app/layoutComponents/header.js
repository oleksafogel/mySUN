'use client'

import React, { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.css';

import Logo from './logo';

import openImg from '../../images/mobilemenu-burger.svg';
import closeImg from '../../images/mobilemenu-close.svg';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  const pathname = usePathname();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <header className={`${styles.header} ${scrolling ? `${styles.sticky} ${styles.scrollShadow}` : ''}`}>
      <nav className={styles.navbar}>
        <div><Logo /></div>             
        <ul className={`${styles.navLinks} ${showMenu ? styles.show : ''}`}>
          <li><Link href="/" className={`${styles.link} ${pathname === '/' ? `${styles.active}` : ''}`} onClick={handleMenuItemClick} >About mySUN</Link></li>
          <li><Link href="/users" className={`${styles.link} ${pathname === '/users' ? `${styles.active}` : ''}`} onClick={handleMenuItemClick} >mySUN Users</Link></li>
          <li><Link href="/partners" className={`${styles.link} ${pathname === '/partners' ? `${styles.active}` : ''}`} onClick={handleMenuItemClick} >Partners</Link></li>
          <li><Link href="/actions" className={`${styles.link} ${pathname === '/actions' ? `${styles.active}` : ''}`} onClick={handleMenuItemClick} >Actions</Link></li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {showMenu ? <Image src={closeImg} alt='Close menu' /> : <Image src={openImg} alt='Open menu' />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
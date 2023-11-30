/*
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Logo from '../sources/company-logo.png'
import { AboutUs } from '../pages/AboutUs'
import { Turkmenistan } from '../pages/Turkmenistan'
import { Tours } from '../pages/Tours'
import { Services } from '../pages/Services'
import { Contact } from '../pages/Contact'
import SearchBar from './SearchBar';
import Instagram from '../sources/instagram.png'
import X from '../sources/x.png'
import Mail from '../sources/mail.png'
import Selector from './Selector' 

*/

import React, { useState, useEffect } from 'react';
import Logo from '../sources/company-logo.png';
import Menu from '../sources/hamburger.png'
import Close from '../sources/close.png'



function Navbar() {
  const Links = [
    { name: 'Services', link: '/' },
    { name: 'Tours', link: '/' },
    { name: 'Turkmenistan', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Contact', link: '/' },

  ]
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(''); // This will clear the input field
    // Add your submit logic here 
  }
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);


  },
    []);
  return (

    <div className='Navbar_wrapper shadow-md w-full'>

      <div className='md:flex items-center justify-between bg-[#0D1680] py-9 lg:px-10 px-7'>
        <div className='Icon-wrapper w-28 md:w-48 lg:shrink-0 lg:flex'>
          <img className='w-fit  ' src={Logo} alt="logo" />
        </div>


        <div>
          {isOpen ? (
            <div className='close w-5 md:w-8 absolute top-12 right-10 cursor-pointer md:hidden ' onClick={() => setIsOpen(false)}>
              <img src={Close} alt="close button" />
            </div>
          ) : (
            <div className='w-5 md:w-8 absolute top-12 right-10 cursor-pointer md:hidden ' onClick={() => setIsOpen(true)}>
              <img className='w-full' src={Menu} alt="hamburger menu" />
            </div>
          )}
        </div>

        {(isOpen || windowWidth >= 768) && (
          <ul className='md:flex md:items-center md:shrink-0 '> {
            Links.map((link) => (
              <li className='text-white hover:text-[#FFC61A] duration-200 text-lg ml-5  md:0 my-2 '>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        )}

        {(isOpen || windowWidth >= 768) && (
          <form onSubmit={handleSubmit} className='search-bar md:flex md:items-center px-3'>
            <input
              className='outline-none rounded-md h-8  w-[150px] lg:w-[200px] pl-2 font-semibold'
              type="search"
              placeholder=' Search'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        )}

        <div className='social-icons-container  flex w-fit  lg:visible invisible '>
          <a className="mr-6 text-[#FFC61A] " href='#'>
            <svg className="lg:h-8 lg:w-8  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a className='mr-6 text-[#FFC61A]' href="#">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm12 9.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6.5a1 1 0 11-2 0 1 1 0 012 0" />
            </svg>
          </a>
          <a className='text-[#FFC61A]' href=" #">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </a>

        </div>

      </div >
    </div>

  );
}




export default Navbar;

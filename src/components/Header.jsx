import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  return <div className='flex justify-between w-full bg-[#1e1f24] text-white px-10 py-5 fixed top-0 z-[51]'>
      <Link to="/">
      <h1 className='font-bold font-serif text-[1rem]'>SACHIN SHELKE</h1>
      </Link>
      <div className='space-x-5 hidden md:flex'>
          <Link to="/" className=''>
          <p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Home</p>
          </Link>
          <Link to="/project"><p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Project</p></Link>
          <Link to="/contact">
          <p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Contact Me</p>
          </Link>
          <div className='hover:bg-gray-200 px-2 rounded-lg cursor-pointer'>
          <a href="https://github.com/sachinshelke7">
          <ion-icon name="git-branch-outline" className="header_logo"></ion-icon>
          </a>
          </div>
      </div>
      <Sidebar />

  </div>;
};

export default Header;

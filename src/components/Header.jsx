import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className='flex justify-between w-full bg-gray-900 text-white px-5 py-4 fixed top-0'>
      <Link to="/">
      <h1 className='font-bold font-serif text-[1rem]'>LOGO</h1>
      </Link>
      <div className='flex space-x-5'>
          <Link to="/" className=''>
          <p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Home</p>
          </Link>
          <Link to="/about"><p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Education</p></Link>
          <Link to="/project"><p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Project</p></Link>
          <Link to="/contact">
          <p className='text-gray-300 hover:text-white hover:scale-105 border-white duration-300 transition-colors'>Contact Me</p>
          </Link>
      </div>
  </div>;
};

export default Header;

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('bg-transparent');
  const handleNav = () => setNav(!nav);
  const handleColor = () =>
    window.scrollY >= 100
      ? setColor('bg-gradient-to-br from-slate-800 to-slate-600')
      : setColor('bg-transparent');

  window.addEventListener('scroll', () => handleColor());

  return (
    <div
      className={`sticky ${color} transition-all duration-150 top-0 flex justify-between mx-auto xl:px-6 items-center h-16 px-4 py-4`}
    >
      <p className='text-lg font-bold text-green-500'>NAVBAR</p>
      <ul className='hidden  sm:flex gap-5 '>
        <li className='hover:text-sky-500  cursor-pointer'>Home</li>
        <li className='hover:text-sky-500  cursor-pointer'>Company</li>
        <li className='hover:text-sky-500  cursor-pointer'>Resources</li>
        <li className='hover:text-sky-500  cursor-pointer'>About</li>
        <li className='hover:text-sky-500  cursor-pointer'>Contact</li>
      </ul>
      <div
        onClick={() => handleNav()}
        className='cursor-pointer hover:scale-125 hover:transition duration-150 sm:hidden'
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={
          nav
            ? 'fixed top-0 left-0 bg-gradient-to-r from-slate-900/80 to-slate-800 w-2/3 h-full  transition-all ease-in-out duration-300'
            : 'fixed top-0 left-[-100%] bg-gradient-to-r from-slate-900/80 to-slate-800 w-2/3 h-full  transition-all ease-out duration-700'
        }
      >
        <ul className=''>
          <li className='p-4 border-b-2 cursor-pointer hover:bg-slate-500 border-gray-300'>
            Home
          </li>
          <li className='p-4 border-b-2  cursor-pointer hover:bg-slate-500 border-gray-300'>
            Company
          </li>
          <li className='p-4 border-b-2  cursor-pointer hover:bg-slate-500 border-gray-300'>
            Resources
          </li>
          <li className='p-4 border-b-2  cursor-pointer hover:bg-slate-500 border-gray-300'>
            About
          </li>
          <li className='p-4 border-b-2  cursor-pointer hover:bg-slate-500 border-gray-300'>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

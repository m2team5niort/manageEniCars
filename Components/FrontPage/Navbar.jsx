import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-blue-500'> ManageCars </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'> Accueil </li>
        <li className='p-4'> Voitures </li>
        <li className='p-4'> Trajets </li>
        <li className='p-4'> Contact </li>
      </ul>
      <button class="bg-white text-[#000300] font-bold py-2 px-4 rounded ml-16">
        Connexion
      </button>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> ManageCars </h1>
          <li className='p-4 border-b border-gray-600'> Accueil </li>
          <li className='p-4 border-b border-gray-600'> Voitures </li>
          <li className='p-4 border-b border-gray-600'> Trajets </li>
          <li className='p-4 border-b border-gray-600'> Contact </li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

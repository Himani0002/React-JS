import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';


const Navbar = () => {
  return (
    <header className='w-full py-5 am:px-10 px-5 flex justify-betwee items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
      </nav>
      <div className='flex justify-center items-center max-sm:hidden '>
        {navLists.map((nav, i) => (
          <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all '>
            {nav}
          </div>
        ))}
      </div>
      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 '>
        <img src={searchImg} alt="Search Icon" width={18} height={18} />
        <img src={bagImg} alt="Search Icon" width={18} height={18} />
      </div>
    </header>
  );
}

export default Navbar;

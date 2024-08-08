import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className='border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <NavLink to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-pink-700'>Guidr</span>
          </NavLink>
          <div className='flex md:order-2'>
            <NavLink to='/tools'>
              <button type="button" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Get started</button>
            </NavLink>
          </div>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
              <li>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-pink-700' : 'text-gray-900') + ' block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'} aria-current='page'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/tools' className={({ isActive }) => (isActive ? 'text-pink-700' : 'text-gray-900') + ' block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}>Explore</NavLink>
              </li>
              <li>
                <NavLink to='/contribute' className={({ isActive }) => (isActive ? 'text-pink-700' : 'text-gray-900') + ' block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}>Contribute</NavLink>
              </li>
              <li>
                <NavLink to='/premium' className={({ isActive }) => (isActive ? 'text-pink-700' : 'text-gray-900') + ' block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}>Premium</NavLink>
              </li>
              <li>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-pink-700' : 'text-gray-900') + ' block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}>About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

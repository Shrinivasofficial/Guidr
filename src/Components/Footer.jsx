import React from 'react';

export const Footer = () => {
  return (
    <div>
        <footer className='border-t border-gray-200 mt-8'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a href='#' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
              <h2 className='text-4xl font-semibold text-pink-700'>Guidr</h2>
            </a>
            <ul className='flex flex-wrap items-center text-sm font-medium text-gray-500 space-x-4'>
              <li>
                <a href='#' className='hover:underline'>About</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Services</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Contact</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

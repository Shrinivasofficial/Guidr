import React, { useState } from 'react';

export const Search = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('#dropdown-button') && !event.target.closest('#dropdown')) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='max-w-lg mx-auto'>
      <form className='flex flex-col'>
        <div className='flex mb-4 relative'>
          {/* Dropdown Button */}
          <button
            type='button'
            id='dropdown-button'
            onClick={toggleDropdown}
            className='flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-pink-300'
          >
            All Categories
            <svg
              className='w-2.5 h-2.5 ms-2.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1l4 4 4-4' />
            </svg>
          </button>
          {/* Dropdown Menu */}
          <div
            id='dropdown'
            className={`absolute top-full left-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${isDropdownOpen ? 'block' : 'hidden'}`}
          >
            <ul className='py-2 text-sm text-gray-700'>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100'>
                  Designs
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100'>
                  Cloud Computing
                </button>
              </li>
              <li>
                <button type='button' className='inline-flex w-full px-4 py-2 hover:bg-gray-100'>
                  Low Code Tools
                </button>
              </li>
            </ul>
          </div>
          {/* Search Input */}
          <div className='relative w-full'>
            <input
              type='search'
              id='search-dropdown'
              className='block p-2.5 w-full text-sm font-medium text-gray-900 bg-gray-50 border border-gray-300 border-l-0 rounded-r-lg focus:ring-pink-500 focus:border-pink-500'
              placeholder='Search Designs, Cloud Computing...'
              required
            />
            <button
              type='submit'
              className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-pink-700 rounded-r-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300'
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

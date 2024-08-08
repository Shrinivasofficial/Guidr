import React from 'react';
import { Search } from './Search';

export const Hero = () => {
  return (
    <div className='container mx-auto mt-14 p-4'>
      <h1 className='mb-4 text-center text-6xl font-bold leading-none tracking-tight text-pink-600 md:text-5xl lg:text-6xl'>
        Guidr - <span className='text-black italic'>Your AI Tools Companion</span>
      </h1>
      <p className='mb-6 text-center tracking-tight text-lg font-normal text-gray-400 lg:text-l sm:px-16 xl:px-48'>
        Guidr is your all-in-one platform for discovering top AI tools and mastering them with easy-to-follow guides. Grow with Guidr.
      </p>
      <Search />
    </div>
  );
};

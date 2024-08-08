import React from 'react';

export const Steps = () => {
  return (
    <div className='mt-16 mb-8 py-6 flex flex-col items-center'>
      <h1 className='text-4xl font-semibold text-center mb-8 py-6 md:text-6xl'>How Guidr Works?</h1>
      
      {/* First Section */}
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-4 md:px-0'>
        <img
          className='w-full md:w-1/2 h-auto rounded-lg'
          src='https://activate.fujitsu/-/media/Project/Fujitsu/Fujitsu-Activate/key-technologies/5key-ai-kv-936x578.jpg?rev=f7c6c2ed63bb45cf88cabae98c947453'
          alt='AI tools'
        />
        <div className='flex flex-col md:ml-8 mt-8 md:mt-0 w-full md:w-1/2'>
          <h2 className='text-3xl font-semibold'>
            Your One-Stop Solution
          </h2>
          <p className='mt-4 text-center md:text-left'>
            Guidr will help you with all the latest AI tools you need to have during your work.
          </p>
        </div>
      </div>

      {/* Border Section */}
      <div className='w-full mt-12 mb-12 border-t border-gray-200' style={{ height: '2px' }}></div>

      {/* Second Section */}
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-4 md:px-0'>
        <img
          className='w-full md:w-1/2 h-auto rounded-lg'
          src='https://activate.fujitsu/-/media/Project/Fujitsu/Fujitsu-Activate/key-technologies/5key-ai-kv-936x578.jpg?rev=f7c6c2ed63bb45cf88cabae98c947453'
          alt='AI tools'
        />
        <div className='flex flex-col md:ml-8 mt-8 md:mt-0 w-full md:w-1/2'>
          <h2 className='text-3xl font-semibold'>
            Your One-Stop Solution
          </h2>
          <p className='mt-4 text-center md:text-left'>
            Guidr will help you with all the latest AI tools you need to have during your work.
          </p>
        </div>
      </div>

      {/* Border Section */}
      <div className='w-full mt-12 mb-12 border-t border-gray-200' style={{ height: '2px' }}></div>

      {/* Third Section */}
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-4xl px-4 md:px-0'>
        <img
          className='w-full md:w-1/2 h-auto rounded-lg'
          src='https://activate.fujitsu/-/media/Project/Fujitsu/Fujitsu-Activate/key-technologies/5key-ai-kv-936x578.jpg?rev=f7c6c2ed63bb45cf88cabae98c947453'
          alt='AI tools'
        />
        <div className='flex flex-col md:ml-8 mt-8 md:mt-0 w-full md:w-1/2'>
          <h2 className='text-3xl font-semibold'>
            Your One-Stop Solution
          </h2>
          <p className='mt-4 text-center md:text-left'>
            Guidr will help you with all the latest AI tools you need to have during your work.
          </p>
        </div>
      </div>

      {/* Border Section */}
      <div className='w-full mt-12 mb-12 border-t border-gray-200' style={{ height: '2px' }}></div>
    </div>
  );
};

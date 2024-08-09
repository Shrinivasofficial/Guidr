import React from 'react';

export const Figma = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4'>
      
      <div className='flex flex-col md:flex-row items-center mt-16'>
        <img 
          className='h-auto max-w-full sm:h-56 w-56 mb-4 md:mb-0 md:mr-8' 
          src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png' 
          alt='Figma Logo'
        />
        <div className='flex flex-col text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Figma</h1>
          <p className='text-base sm:text-lg text-gray-500 mb-4'>
            Design, prototype, collaborate, iterate, share.
          </p>
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start'>
            <a className='bg-pink-500 text-md py-2 px-4 rounded-lg hover:bg-pink-600 text-white' href='https://www.figma.com/'>
              Go to Figma
            </a>
            <a href = 'https://www.canva.com/design/DAGMTqItT_0/5iAktFh_1ym07tBUX4PQsg/view?utm_content=DAGMTqItT_0&utm_campaign=designshare&utm_medium=link&utm_source=editor' className='bg-pink-500 text-md py-2 px-4 rounded-lg hover:bg-pink-600 text-white'>
              Guidr Guide
            </a>
          </div>
        </div>
      </div>

      {/* Additional elements like photos of Figma */}
      <h3 className='mt-14 text-4xl font-semibold text-center'>More on Figma</h3>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <img 
          className='h-48 w-full object-cover rounded-lg' 
          src='https://media.licdn.com/dms/image/D5612AQGsM2pO4LQnqg/article-cover_image-shrink_720_1280/0/1708323477264?e=2147483647&v=beta&t=Y6dEBDzmvRP_5h9584Q7fTqV6GP1WdFGqD6Os7UmvLw' 
          alt='Figma Screenshot 1'
        />
        <img 
          className='h-48 w-full object-cover rounded-lg' 
          src='https://media.licdn.com/dms/image/D5612AQGsM2pO4LQnqg/article-cover_image-shrink_720_1280/0/1708323477264?e=2147483647&v=beta&t=Y6dEBDzmvRP_5h9584Q7fTqV6GP1WdFGqD6Os7UmvLw' 
          alt='Figma Screenshot 2'
        />
        <img 
          className='h-48 w-full object-cover rounded-lg' 
          src='https://media.licdn.com/dms/image/D5612AQGsM2pO4LQnqg/article-cover_image-shrink_720_1280/0/1708323477264?e=2147483647&v=beta&t=Y6dEBDzmvRP_5h9584Q7fTqV6GP1WdFGqD6Os7UmvLw' 
          alt='Figma Screenshot 3'
        />
      </div>
    </div>
  );
}

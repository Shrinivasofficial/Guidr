import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Tools = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(Array(12).fill(false)); // Adjusted to match the number of tools
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (index) => {
    if (index === 1) { // Assuming the Figma tool is at index 1
      navigate('/figma'); // Replace with the actual route for figma.jsx
    } else {
      setDropdownOpen(dropdownOpen.map((item, i) => (i === index ? !item : item)));
    }
  };

  const tools = [
    { name: 'Uizard', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy8rydMu4Ns2O0a8h3KWnSLEHEv1VuiJ1-A&s' },
    { name: 'Figma', logo: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png' },
    { name: 'Adobe XD', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVhrWoSm-2GjDtZwV4gnbmjjZ3Bvfg69bEw&s' },
    { name: 'Sketch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png' },
    { name: 'InVision', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-invision-2-432521.png?f=webp&w=256' },
    { name: 'Marvel', logo: 'https://kreafolk.com/cdn/shop/articles/marvel-logo-design-history-and-evolution-kreafolk_50f7a4b8-dc53-495d-89bc-84c168382b61.jpg?v=1717725011&width=2048' },
    { name: 'Axure RP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdVxG38gyEwtj0wM2tqOqyiSC62HNcITSig&s' },
    { name: 'Proto.io', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReS8zriV-MWwVhccxjBLFc_pEDvvfu-IB1dQ&s' },
    { name: 'Framer', logo: 'https://avatars.githubusercontent.com/u/42876?s=280&v=4' },
    { name: 'Balsamiq', logo: 'https://pbs.twimg.com/profile_images/476802805185777664/LJf-7p3B_400x400.png' },
    { name: 'Zeplin', logo: 'https://cdn.sanity.io/images/wd3e2pma/production/716ae55a149ff63038853cb19d0c17676d406676-1200x600.jpg?rect=29,0,1143,600&w=1200&h=630' },
    { name: 'Origami Studio', logo: 'https://origami.design/public/images/homepage/homepage-og.png' }
  ];

  return (
    <div className={`flex ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
      {/* Sidebar Button */}
      <button 
        type='button' 
        onClick={toggleSidebar}
        className='text-gray-500 hover:text-gray-700 focus:outline-none fixed top-4 left-4 z-50'>
        <span className='sr-only'>{sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}</span>
        {sidebarOpen ? (
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 10.293l4.646-4.646a1 1 0 00-1.414-1.414L12 7.586 7.354 3.94a1 1 0 10-1.414 1.414L10.293 10H3a1 1 0 100 2h7.293l-4.646 4.646a1 1 0 101.414 1.414L12 12.414l4.646 4.646a1 1 0 001.414-1.414L13.707 12h7.293a1 1 0 100-2h-7.293z" clipRule="evenodd"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0-5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"/>
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-50`} aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto'>
          <h2 className='text-4xl font-semibold text-pink-700 mb-8 px-2'>Guidr</h2>
          <ul className='space-y-2 font-medium'>
            {['Dashboard', 'UX/UI Designing', 'Cloud Computing', 'AWS', 'Networking'].map((item, index) => (
              <li key={index}>
                <a href='#' className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-pink-200 hover:text-pink-700 group'>
                  <svg className="w-5 h-5 text-pink-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG paths here */}
                  </svg>
                  <span className='ml-3'>{item}</span>
                  {['UX/UI Designing', 'Cloud Computing'].includes(item) && (
                    <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-900 bg-gray-100 rounded-full'>Pro</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex-1 pt-6 pl-4 md:pl-24 transition-all duration-300'>
        <h1 className='text-3xl font-semibold mb-4'>Discover the Power of AI</h1>
        <p className='text-gray-700 mb-6'>
          Explore a curated list of the best AI tools available in the market and unlock the full potential of artificial intelligence. From data analytics to machine learning, we've got you covered with the top 50 AI tools.
        </p>
        <div className='flex items-center'>
          <input 
            type='text' 
            placeholder='Search AI Tools' 
            className='border border-gray-300 rounded-lg py-3 px-6 w-96 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent' 
          />
          <button className='ml-1 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75'>
            Search
          </button>
        </div>

        {/* Tools List */}
        <div className='pt-8'>
          <h3 className='text-xl font-semibold mb-4'>Top 12 AI tools for UX/UI designers</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {tools.map((tool, index) => (
              <li key={index} className='p-4 bg-white rounded-lg shadow-md flex flex-col items-center'>
                <img src={tool.logo} alt={tool.name} className='w-16 h-16 mb-2' />
                <h4 className='text-lg font-medium'>{tool.name}</h4>
                <button
                  onClick={() => toggleDropdown(index)}
                  className='mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75'
                >
                  {dropdownOpen[index] ? 'Close' : 'Learn More'}
                </button>
                {dropdownOpen[index] && (
                  <div className='mt-2 text-sm text-gray-700'>
                    This is a brief description of {tool.name}. Click to learn more!
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;

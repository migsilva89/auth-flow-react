import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <section className='bg-gray-900 '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div>
          <p className='text-sm font-medium text-blue-400'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-white md:text-3xl'>We can’t find that page</h1>
          <p className='mt-4 text-gray-400'>Sorry, the page you are looking for doesn't exist or has been moved.</p>

          <div className='flex items-center mt-6 gap-x-3'>
            <button onClick={goToHomePage} className='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
              </svg>

              <span>Take me home</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

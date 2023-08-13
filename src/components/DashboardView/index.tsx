import React from 'react';
import { useAuth } from '../../contexts/useAuth.ts';
import { User } from '../../interfaces/authTypes.ts';

interface DashboardViewProps {
  user: User | null;
}

const DashboardView: React.FC<DashboardViewProps> = ({ user }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center pb-10'>
        <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src={user?.image} alt={`${user?.firstName} image`} />
        <h5 className='mb-1 text-xl font-medium text-white'>{user?.firstName}</h5>
        <span className='text-sm text-gray-500'>{user?.lastName}</span>
        <div className='flex mt-4 space-x-3 md:mt-6'>
          <a
            onClick={handleLogout}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;

import React from 'react';
import { useAuth } from '../../contexts/useAuth.ts';

const DashboardView: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='text-white text-2xl'>
      <p>Welcome to the Dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardView;

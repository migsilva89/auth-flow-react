import DashboardView from '../components/DashboardView';
import { useEffect } from 'react';
import { useAuth } from '../contexts/useAuth.ts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <header className='text-center py-10 md:mt-52 mt-20 max-w-lg mx-auto'>
        <p className='text-white text-lg px-4'>
          Congratulations! You have successfully logged in. Here are the details of the logged-in profile:
        </p>
      </header>
      <main>
        <DashboardView user={user} />
      </main>
      <footer>
        <p className='text-red-500 mt-4 max-w-lg mx-auto px-4 text-center '>
          Remember that this route is protected. If you delete the token from cookies or log out, you will be redirected
          to the login page and won't be able to access this page without logging in again.
        </p>
      </footer>
    </>
  );
};

export default Dashboard;

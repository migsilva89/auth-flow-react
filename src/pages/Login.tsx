import LoginForm from '../components/LoginForm';
import { useEffect } from 'react';
import { useAuth } from '../contexts/useAuth.ts';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <header className='text-center md:mt-52 mt-20'>
        <img src='/logo-blue.png' alt='Your Logo' className='mx-auto w-96' />
      </header>
      <main>
        <LoginForm />
        <div className='text-center'>
          <p className='text-white text-md'>Use below credentials for testing:</p>
          <p className='text-gray-300 text-sm mt-2'>
            Username: kminchelle
            <br />
            Password: 0lelplR
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;

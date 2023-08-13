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
  return <LoginForm />;
};

export default Login;

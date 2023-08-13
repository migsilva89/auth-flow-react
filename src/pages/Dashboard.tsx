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
      <main className='bg-gray-900'>
        <header className='text-center py-10'>
          <p className='text-white text-lg'>
            Parabéns! Você fez login com sucesso. Aqui estão os detalhes do seu perfil:
          </p>
          {user && (
            <div className='text-gray-300'>
              <p>Nome: {user.firstName}</p>
            </div>
          )}
          <p className='text-red-500 mt-4'>
            Lembre-se de que esta rota é protegida. Se você apagar o token dos cookies, será redirecionado para a página
            de login.
          </p>
        </header>
        <DashboardView user={user} />
      </main>
    </>
  );
};

export default Dashboard;

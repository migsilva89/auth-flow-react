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
      <header className='text-center py-10 mt-8 max-w-lg mx-auto'>
        <p className='text-white text-lg px-4'>
          Parabéns {user?.firstName}! Fizes-te login com sucesso. Aqui estão os detalhes do perfil logado:
        </p>
      </header>
      <main>
        <DashboardView user={user} />
      </main>
      <footer>
        <p className='text-red-500 mt-4 max-w-lg text-center mx-auto px-4'>
          Lembra-te de que esta rota é protegida. Se apagares o token dos cookies ou fizeres logout, serás redirecionado
          para a página de login, nao podendo aceder a esta pagina sem fazer login novamente.
        </p>
      </footer>
    </>
  );
};

export default Dashboard;

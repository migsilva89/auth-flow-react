import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Dashboard from './pages/DashboardPage.tsx';
import { useAuth } from './hooks/useAuth.ts';
import NotFound from './pages/NotFound.tsx';
import PrivateRoute from './components/PrivateRoutes';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/useAuth.ts';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
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

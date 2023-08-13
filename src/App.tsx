import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import { useAuth } from './contexts/useAuth.ts';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;

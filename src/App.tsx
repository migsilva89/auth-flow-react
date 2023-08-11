import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

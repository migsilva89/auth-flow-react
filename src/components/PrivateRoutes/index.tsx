import { Navigate } from 'react-router-dom';
import React from 'react';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default PrivateRoute;

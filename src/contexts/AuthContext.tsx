import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/api.ts';
import { AuthContextData, User } from '../interfaces/authTypes.ts';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { 'auth-flow-token': token } = parseCookies();

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  useEffect(() => {
    setIsAuthenticated(!!token); //converting the value of token to boolean with !!
  }, [token]);

  async function login(username: string, password: string): Promise<void> {
    const response = await api.post('/auth/login', { username, password });
    const userData: User = response.data;

    setCookie(null, 'auth-flow-token', userData.token, {
      maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
      path: '/',
    });

    api.defaults.headers['Authorization'] = `Bearer ${userData.token}`;

    setUser(userData);
    setIsAuthenticated(true);
  }

  function logout(): void {
    destroyCookie(null, 'auth-flow-token');
    delete api.defaults.headers['Authorization'];
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };

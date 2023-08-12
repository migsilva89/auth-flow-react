import React, { createContext, useState } from 'react';
import { api } from '../services/api.ts';
import { AuthContextData, User } from '../interfaces/authTypes.ts';

// Create the AuthContext with an initial empty object (useful for typing)
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// AuthProvider component responsible for setting up the context and authentication logic
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  //todo: save token on cookies
  async function login(username: string, password: string): Promise<void> {
    try {
      const response = await api.post('/auth/login', { username, password });
      const userData: User = response.data;
      setUser(userData);
    } catch (error) {
      throw new Error('Authentication failed');
    }
  }

  function logout(): void {
    setUser(null);
    //todo: add logout logic remove token from cookies
  }

  // Provide the context value to the components wrapped in AuthProvider
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// Export the AuthContext for components to use
export { AuthContext };

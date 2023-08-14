import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.tsx';
import { AuthContextData } from '../types/authTypes.ts';

export const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};

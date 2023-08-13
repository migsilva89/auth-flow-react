import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthContextData } from '../interfaces/authTypes.ts';

export const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};

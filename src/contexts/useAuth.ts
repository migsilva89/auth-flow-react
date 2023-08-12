import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthContextData } from '../interfaces/authTypes.ts'; // Make sure to import the correct types

export const useAuth = (): AuthContextData => {
  return useContext(AuthContext);
};

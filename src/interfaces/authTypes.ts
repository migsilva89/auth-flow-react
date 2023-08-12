export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface AuthContextData {
  user: User | null;
  login(username: string, password: string): Promise<void>;
  logout(): void;
  isAuthenticated: boolean;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

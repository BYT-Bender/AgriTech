import * as React from 'react';
import { User } from '../store/types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthContextType extends AuthState {
  login: (credentials: { identifier: string; password: string; type: 'buyer' | 'seller' }) => Promise<void>;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
  });

  const login = async (credentials: { identifier: string; password: string; type: 'buyer' | 'seller' }) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement actual API call
      const user = { id: '1', ...credentials };
      setState(prev => ({ ...prev, user, isLoading: false }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Login failed', 
        isLoading: false 
      }));
    }
  };

  const logout = () => {
    setState({ user: null, isLoading: false, error: null });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
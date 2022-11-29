import { useContext } from 'react';
import { Auth } from '../authcontext/authContext';

export default function useAuth() {
  const context = useContext(Auth);
  if (context === undefined) {
    throw new Error('Context not accesible');
  }

  return context;
}

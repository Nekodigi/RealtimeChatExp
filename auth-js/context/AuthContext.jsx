import { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../secret/FBSdk.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');

  const value = {
    user,
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { createContext, useState, useContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../secret/FBSdk.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User>();

  const value:any = {
    user,
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user as User);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

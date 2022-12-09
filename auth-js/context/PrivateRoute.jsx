import { createContext, useState, useContext, useEffect, Component } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../secret/FBSdk.json';
import { useAuthContext } from './AuthContext';
import { useRouter } from 'next/router';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function PrivateRoute({ is_public, children }) {
    const { user } = useAuthContext();
    const router = useRouter();

  useEffect(() => {
    if(!is_public && !user)router.push("/Login");
  }, []);
//    is_public || user ? children : null
  return (
    is_public || user ? children : null
  );
}
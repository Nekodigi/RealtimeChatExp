import { Box, Button, Paper, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, onSnapshot, query, setDoc } 
from "firebase/firestore";
import firebaseConfig from "../secret/FBSdk.json" assert {type: 'json'};
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export default function Auth() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const create = () => {
    createUserWithEmailAndPassword(auth, "test@gmail.com", "pass");
  }
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      // setUser(user);
      console.log(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);


  return <div>
    <h1>Firestore with Auth</h1>
  </div>
}
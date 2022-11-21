import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import firebaseConfig from '../secret/FBSdk.json';
import { useAuthContext } from '../context/AuthContext';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ログイン {user.email}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

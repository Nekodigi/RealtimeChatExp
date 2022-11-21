import { FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../secret/FBSdk.json';
import { useAuthContext } from '../context/AuthContext';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } : any = useAuthContext();


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password);
  };
  const handleChangeEmail = (event:any) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event:any) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ユーザ登録 {user.email}</h1>
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
          <button>登録</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
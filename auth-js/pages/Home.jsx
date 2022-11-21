import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/router'


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Home = () => {
  const router = useRouter();
  //const history = useHistory();
  const handleLogout = () => {
    auth.signOut();
    router.push('/Login');
    //history.push('/login');
  };
  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;
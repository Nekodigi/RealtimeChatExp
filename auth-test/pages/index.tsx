import SignUp from '../components/Signup';
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <div style={{ margin: '2em' }}>
      <SignUp />
    </div>
    </AuthProvider>
  );
}

export default App;
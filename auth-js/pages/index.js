import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Link from 'next/link';

function App() {
  return (
      <div style={{ margin: '2em' }}>
        <h1>TOP Page</h1>
        <Link href="/SignUp">Sign Up</Link><br/>
        <Link href="/Login">Login</Link><br/>
        <Link href="/Home">Home</Link>
      </div>
  );
}

export default App;
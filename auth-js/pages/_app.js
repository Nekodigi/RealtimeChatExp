import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext';
import { PrivateRoute } from '../context/PrivateRoute';

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <PrivateRoute is_public={Component.is_public}>
      <Component {...pageProps} />
      </PrivateRoute>
    </AuthProvider>
}

export default MyApp

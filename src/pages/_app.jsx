import { AuthState } from '../lib/context/auth/authContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  );
}

export default MyApp;
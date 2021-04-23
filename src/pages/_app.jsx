import { Toaster } from 'react-hot-toast';
import { AppState } from 'lib/context/app/appContext';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            margin: '40px',
            background: '#363636',
            color: '#fff',
            zIndex: 1,
          },
          duration: 3000,
        }}
      />
    </AppState>
  );
}

export default MyApp;

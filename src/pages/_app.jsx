import 'styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '../state';
import { Toaster } from 'react-hot-toast';
// import { AppState } from 'lib/context/app/appContext';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;

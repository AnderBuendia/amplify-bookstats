import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useStore } from '../state';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

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

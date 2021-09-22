import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import Contexts from '../context';
import RootLayout from '../layouts/RootLayout';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.scss';
import { LeftButton, RightButton } from '../components/pageComponents/Navigation';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Contexts>
      <RootLayout>
        <LeftButton />
        <RightButton />
        <Component {...pageProps} />
        <ToastContainer
          position='top-right'
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </RootLayout>
    </Contexts>
  );
}

import type { AppProps } from 'next/app';

import Contexts from '../context';
import RootLayout from '../layouts/RootLayout';

import '../styles/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Contexts>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Contexts>
  );
}

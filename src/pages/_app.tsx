import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins, Open_Sans } from '@next/font/google';

const poppins = Poppins({
  weight: ['500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
const openSans = Open_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-openSans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${openSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}


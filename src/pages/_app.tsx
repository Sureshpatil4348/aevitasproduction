import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { StagewiseToolbar } from '@stagewise/toolbar-next';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const stagewiseConfig = { plugins: [] };
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <>
      <Head>
        <title>Medblen - AI-Powered Video Content Creation</title>
        <meta name="description" content="Leverage cutting-edge AI to automate and simplify video content creation for multiple platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        {isDevelopment && <StagewiseToolbar config={stagewiseConfig} />}
        <Component {...pageProps} />
      </main>
    </>
  );
} 
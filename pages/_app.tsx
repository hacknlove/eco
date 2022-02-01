import 'marx-css/css/marx.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {
          process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && <script defer data-domain="ecologia.eco" src="/js/script.js"></script>
        }
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

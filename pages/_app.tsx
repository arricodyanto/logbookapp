import '../styles/dashboard.css'
import '../styles/core.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sistem Monitoring Tugas Akhir</title>
        <meta name="description" content="An App to Monitoring Students with Logbook" />
        <link rel="icon" href="/favicon.png" />

        {/* <!-- Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        {/* <!-- End fonts --> */}
      
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

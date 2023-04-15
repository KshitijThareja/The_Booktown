import '@/styles/globals.css'

import React from "react";
import Head from "next/head";
import { AuthenticationProvider } from '@/context/AuthenticationContext';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>The BookTown</title>
        <meta
          name="viewport "
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
        />
      </Head>
      <AuthenticationProvider>
        <Component {...pageProps} />
      </AuthenticationProvider>
      
  
    </React.Fragment>
  );
}

export default MyApp;

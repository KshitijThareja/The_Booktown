import '@/styles/globals.css'

import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>figma</title>
        <meta
          name="viewport "
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
  
    </React.Fragment>
  );
}

export default MyApp;

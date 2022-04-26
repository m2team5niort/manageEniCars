// Imports Used
import Head from "next/head";
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import '../styles/dashboard.css';
import '../styles/homepage.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure({
  ...config,
  ssr: true
});

// MyApp funtion
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        {/* <link href='https://api.mapbox.com/mapbox-assembly/mbx/v0.18.0/assembly.min.css' rel='stylesheet' /> */}
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      </Head>

      <nav>
        <Link href="/dashboard">
          <a></a>
        </Link>
      </nav>

      <Component {...pageProps} />

    </>
  )
}

export default MyApp

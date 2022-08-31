// Imports Used
import Head from "next/head";
import '../styles/global.css';
import '../styles/dashboard.css';
import '../styles/myspace.css';
import '../styles/homepage.css';
import '../styles/frontpage.css';
import Amplify from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure({
  ...config,
  ssr: true
});

// MyApp funtion
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />

    </>
  )
}

export default MyApp

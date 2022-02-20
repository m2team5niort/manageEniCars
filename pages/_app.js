// Imports Used
import Head from "next/head";
import 'tailwindcss/tailwind.css';
import { AppWrapper } from '../context/AppContext';

// MyApp funtion
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link href='https://api.mapbox.com/mapbox-assembly/mbx/v0.18.0/assembly.min.css' rel='stylesheet' />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}

export default MyApp

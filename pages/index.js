// Imports Used
import Script from "next/script"
import Link from 'next/link';

// Home function
export default function Home() {

  return (

    <div className="text-gray-700 bg-white antialiased">

      <nav className="flex items-center justify-between flex-wrap p-6 fixed space-between w-full">

        {/* Logo Navbar */}
        <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
          {/* <img src="../assets/images/Compressed_Images/Logo_Compressed.png" style={{width: '100%', height: '50px'}} loading="lazy"/> */}
          <h1 className="text-white"> ManageCars </h1>
        </div>

        {/* Toggle Navbar */}
        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title> Menu </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="self-center">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
            <button onClick={() => setCar('Taycan')} className="text-white font-semibold"> Taycan </button>
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
            <button onClick={() => setCar('911')} className="text-white font-semibold"> 911 Turbo S </button>
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
            <button onClick={() => setCar('Panamera')} className="text-white font-semibold"> Panamera </button>
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
            <button onClick={() => setCar('GT3 RS')} className="text-white font-semibold"> GT3 RS </button>
          </a>
        </div>


        {/* Menu Navbar (Links) */}
        <div id="nav-content" className="">
          <div className="text-sm lg:flex-grow ">


            <Link href="/">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                <button className="text-white font-semibold"> Accueil </button>
              </a>
            </Link>
            <Link href="/signup">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4">
                <button className="text-white font-semibold"> Connexion </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(../assets/images/wallpaper.jpg)', height: '100vh' }}>
        <div className="container m-auto text-center px-6 opacity-100">
          <h1 className="text-6xl font-bold mb-2 text-white mt-16"> ENI ManageCars  </h1>
          <h3 className="text-xl mb-8 text-white"> Vous pouvez réserver, suivre une voiture ou bien covoiturer avec vos collègues. </h3>
          <button className="bg-transparent font-bold rounded-full py-4 px-8 border-4 mt-4  text-white border-white  uppercase tracking-wider hover:border-white hover:text-gray-600 hover:bg-white"> Faire une réservation ? </button>
        </div>
      </div>


      <div className="text-center h-screen" style={{ backgroundImage: 'url(../assets/images/taycan.jpg)' }}>
        <h1 className="text-white  pt-16 font-semibold text-6xl tracking-wider"> Taycan </h1>
        <button className="bg-transparent font-bold rounded-full py-4 px-8 border-4 mt-16  text-white border-white  uppercase tracking-wider hover:border-white hover:text-gray-600 hover:bg-white"> En savoir plus </button>
      </div>

      <div className="text-center h-screen" style={{ backgroundImage: 'url(https://images.alphacoders.com/106/thumb-1920-1069444.jpg)' }}>
        <h1 className="text-white  pt-16 font-semibold text-6xl tracking-wider"> 911 Turbo S </h1>
        <button className="bg-transparent font-bold rounded-full py-4 px-8 border-4 mt-8  text-white border-white  uppercase tracking-wider hover:border-white hover:text-gray-600 hover:bg-white"> En savoir plus </button>
      </div>

      <div className="text-center h-screen" style={{ backgroundImage: 'url(https://www.largus.fr/images/images/porsche-panamera-turbo-s-restyle-1.jfif)' }}>
        <h1 className="text-gray-800  pt-16 font-semibold text-6xl tracking-wider"> Panamera </h1>
        <button className="bg-transparent font-bold rounded-full py-4 px-8 border-4 mt-8  text-gray-800 border-gray-800  uppercase tracking-wider hover:border-gray-800 hover:text-white hover:bg-gray-800"> En savoir plus </button>
      </div>

      <div className="text-center h-screen" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/933113.jpg)' }}>
        <h1 className="text-gray-800  pt-16 font-semibold text-6xl tracking-wider"> GT3 RS </h1>
        <button className="bg-transparent font-bold rounded-full py-4 px-8 border-4 mt-8  text-gray-800 border-gray-800  uppercase tracking-wider hover:border-gray-800 hover:text-white hover:bg-gray-800"> En savoir plus </button>
      </div>




      <div className="bg-white">
        <h2 className="font-semibold text-6xl tracking-wider text-center text-gray-800 pt-16 "> Fonctionnalités  </h2>

        <section className="container mx-auto px-6 p-10 mt-8 ">

          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10 text-left">
              <h4 className="text-3xl text-gray-800 font-bold mb-3"> Diversité dans le choix de votre véhicule </h4>
              <p className="text-gray-600 mb-8"> Effectivement vous pouvez choisir la taille du véhicule en fonction de vos besoins. Comme le nombre de places, la taille du coffre, ou même le gabarit du véhicule. </p>
              <button className=" bg-transparent font-bold rounded-lg py-2 px-4 border-2 mt-8  text-gray-800 border-gray-800  uppercase tracking-wider hover:border-gray-800 hover:text-white hover:bg-gray-800"> En savoir plus </button>


            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="./assets/images/interrior2.jpg" alt="Vortex" loading="lazy" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="./assets/images/driving.jpg" alt="use the force" loading="lazy" />
            </div>
            <div className="w-full md:w-1/2 pl-10 text-right">
              <h4 className="text-3xl text-gray-800 font-bold mb-3"> Le covoiturage ! </h4>
              <p className="text-gray-600 mb-8"> Vous pouvez faire votre trajet en conduisant vos collègues s'ils vont à la même destination que vous. Le processus inverse est également possible, réserver un covoiturage en tant que passager.</p>
              <button className="bg-transparent font-bold rounded-lg py-2 px-4 border-2  text-gray-800 border-gray-800  uppercase tracking-wider hover:border-gray-800 hover:text-white hover:bg-gray-800"> En savoir plus </button>

            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 pr-10 text-left" >
              <h4 className="text-3xl text-gray-800 font-bold mb-3"> La fiche de vie de la voiture </h4>
              <p className="text-gray-600 mb-8"> Il est également possible de suivre la vie de la voiture, si elle a eu des accidents, etc...</p>
              <button className="bg-transparent font-bold rounded-lg py-2 px-4 border-2  text-gray-800 border-gray-800  uppercase tracking-wider hover:border-gray-800 hover:text-white hover:bg-gray-800"> En savoir plus </button>

            </div>
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src="./assets/images/repair.jpg" alt="Syncing" loading="lazy" />
            </div>
          </div>
        </section>
      </div>



      {/* <div className="bg-gray-100">
        <h2 className="font-semibold text-6xl tracking-wider text-center text-gray-800 pt-16"> Avantages </h2>

        <section className="container mx-auto px-6 p-10 mt-8">
          <div className="wrapper">
            <div className="card">
              <div className="card-banner">
                <p className="category-tag popular"> Sociabilité </p>
                <img className="banner-img" src='https://test.psychologies.com/var/tests/storage/images/6/1/3/7/7316-2-fre-FR/test-socio.jpg' alt='' loading="lazy" />
              </div>
              <div className="card-body">
                <p className="blog-hashtag"> #Voyager #Discuter #S'amuser </p>
                <h2 className="blog-title"> Le covoiturage entre collègues </h2>
                <p className="blog-description"> Le voyage passe plus vite quand on s'amuse !</p>

                <div className="card-profile">
                  <img className="profile-img" src='https://www.chacun-sa-route.fr/wp-content/uploads/2020/09/Applis-covoiturage-Photo-1.jpg' alt='' loading="lazy" />
                  <div className="card-profile-info">
                    <h3 className="profile-name"> Covoiturage</h3>
                    <p className="profile-followers"> 50 utilisateurs </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-banner">
                <p className="category-tag technology"> Rapidité </p>
                <img className="banner-img" src='https://static9.depositphotos.com/1579454/1119/i/450/depositphotos_11194321-stock-photo-running-man-from-blocks.jpg' alt='' loading="lazy" />
              </div>
              <div className="card-body">
                <p className="blog-hashtag"> #Rechercher #Cliquer #Réserver </p>
                <h2 className="blog-title">  Facile d'utilisation et technologies avancées. </h2>
                <p className="blog-description"> Gain de temps grâce à la rapidité de l'application </p>

                <div className="card-profile">
                  <img className="profile-img" src='https://c0.wallpaperflare.com/preview/593/880/939/clock-numbers-time-hours.jpg' alt='' loading="lazy" />
                  <div className="card-profile-info">
                    <h3 className="profile-name"> Fluidité </h3>
                    <p className="profile-followers"> 2 fois plus rapide </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-banner">
                <p className="category-tag psychology"> Ecologie </p>
                <img className="banner-img" src='https://www.tonton-communication.fr/wp-content/uploads/2018/10/Image-%C3%A9cologique-1000x539.jpg' alt='' loading="lazy" />
              </div>
              <div className="card-body">
                <p className="blog-hashtag"> #Ecologie #Economie </p>
                <h2 className="blog-title"> Centralisation des trajets </h2>
                <p className="blog-description"> Moins de trajets donc plus écolo ! </p>

                <div className="card-profile">
                  <img className="profile-img" src='https://cdn4.vectorstock.com/i/1000x1000/76/93/ecology-world-map-vector-187693.jpg' alt='' loading="lazy" />
                  <div className="card-profile-info">
                    <h3 className="profile-name"> Responsable </h3>
                    <p className="profile-followers"> 3 fois moins poluant </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div> */}

      <div className="container mx-auto px-6 p-10 mt-8">
        <h2 className="font-semibold text-6xl tracking-wider text-center text-gray-800 "> Avantages </h2>
        <div className="flex flex-col space-y-32 items-center">
          <div className="flex flex-row mt-32 shadow-2xl">
            <img className="h-96" src="https://test.psychologies.com/var/tests/storage/images/6/1/3/7/7316-2-fre-FR/test-socio.jpg" />
            <div className="w-96 text-center  p-20">
              <h1 className="text-4xl"> Sociabilité </h1>
              <h5 className="text-md pt-2"> #Voyager #Discuter #S'amuser </h5>
              <p className="text-md pt-8"> Le covoiturage entre collègues </p>
              <p className="text-lg pt-16"> Covoiturage : 50 utilisateurs </p>
            </div>
          </div>
          <div className="flex flex-row mt-32 shadow-2xl">
            <div className="w-96 ext-center  p-20">
              <h1 className="text-4xl"> Rapidité </h1>
              <h5 className="text-md pt-2"> #Rechercher #Cliquer #Réserver </h5>
              <p className="text-md pt-8"> Facile d'utilisation et technologies avancées. </p>
              <p className="text-lg pt-16"> Fluidité : 2 x + rapide </p></div>
            <img className="h-96" src="https://static9.depositphotos.com/1579454/1119/i/450/depositphotos_11194321-stock-photo-running-man-from-blocks.jpg" />
          </div>
          <div className="flex flex-row mt-32 shadow-2xl">
            <img className="h-96" src="https://www.tonton-communication.fr/wp-content/uploads/2018/10/Image-%C3%A9cologique-1000x539.jpg" />
            <div className="w-96 ext-center  p-20">
              <h1 className="text-4xl"> Ecologie </h1>
              <h5 className="text-md pt-2"> #Ecologie #Economie </h5>
              <p className="text-md pt-8"> Centralisation des trajets </p>
              <p className="text-lg pt-16"> Responsable : 3 x - poluant </p></div>
          </div>
        </div>
      </div>

      <footer className="bg-white h-12 text-center" style={{ display: 'flex' }}>

        <ul className="text-gray-600 flex justify-center w-full pt-2  ">
          <li className="pr-8" > ENI ManageCars © 2022 </li>
          <li className="pr-8" > Mentions légales </li>
          <li className="pr-8"> Contact</li>
          <li className="pr-8"> Plan du site </li>
          <li className=""> Actualité </li>
        </ul>
      </footer>



      <Script src="../assets/js/script.js" />

    </div>

  )
}

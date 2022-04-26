// Imports Used
import Script from "next/script"

// Home function
export default function Home() {

  return (

    <div className="text-gray-700 bg-white antialiased">

    <nav className="flex items-center justify-between flex-wrap p-6">
        
        <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
            <img src="../assets/images/Compressed_Images/Logo_Compressed.png" style={{width: '100%', height: '50px'}} loading="lazy"/>
        </div>
        
        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        
      <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 md:text-right">
        <div className="text-sm lg:flex-grow ">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-1 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4 font-semibold"> Accueil </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4 font-semibold"> Nos voitures </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4 font-semibold" >  </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4"> </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4" ></a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-teal-800 mr-4 font-semibold"> Connexion </a>
         </div>
       </div>
        
    </nav>

    <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: 'url(../assets/images/wallpaper.jpg)', paddingTop: '40rem'}}></div>
      
      <div className="container m-auto text-center px-6 opacity-100">
        <h1 className="text-6xl font-bold mb-2 text-gray-800 mt-16"> Bienvenue sur ENI ManageCars  </h1>
        <h3 className="text-2xl mb-8 text-gray-600"> Vous pouvez réserver, suivre une voiture ou bien covoiturer avec vos collègues. </h3>
        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-white hover:bg-gray-400"> Voulez-vous faire une réservation ? </button>
      </div>
          
    <h2 className="text-4xl font-bold text-center text-gray-800 mt-32"> Les avantages majeurs </h2>

    <section className="container mx-auto px-6 p-10 mt-8">
      <div className="wrapper">
        <div className="card">
          <div className="card-banner">
            <p className="category-tag popular"> Sociabilité </p>
            <img className="banner-img" src='https://test.psychologies.com/var/tests/storage/images/6/1/3/7/7316-2-fre-FR/test-socio.jpg' alt='' loading="lazy"/>
          </div>
          <div className="card-body">
            <p className="blog-hashtag"> #Voyager #Discuter #S'amuser </p>
            <h2 className="blog-title"> Le covoiturage entre collègues </h2>
            <p className="blog-description"> Le voyage passe plus vite quand on s'amuse !</p>
    
            <div className="card-profile">
              <img className="profile-img" src='https://www.chacun-sa-route.fr/wp-content/uploads/2020/09/Applis-covoiturage-Photo-1.jpg' alt='' loading="lazy"/>
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
            <img className="banner-img" src='https://static9.depositphotos.com/1579454/1119/i/450/depositphotos_11194321-stock-photo-running-man-from-blocks.jpg' alt='' loading="lazy"/>
          </div>
          <div className="card-body">
            <p className="blog-hashtag"> #Rechercher #Cliquer #Réserver </p>
            <h2 className="blog-title">  Facile d'utilisation et technologies avancées. </h2>
            <p className="blog-description"> Gain de temps grâce à la rapidité de l'application </p>
    
            <div className="card-profile">
              <img className="profile-img" src='https://play-lh.googleusercontent.com/m-Ozx7aKqhyVjAieqIa9ctJJU0if1k94oAhrbX0tuA8ox-S6bemUQB6Ob9rZfza5fpc=w240-h480-rw' alt='' loading="lazy"/>
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
            <img className="banner-img" src='https://www.tonton-communication.fr/wp-content/uploads/2018/10/Image-%C3%A9cologique-1000x539.jpg' alt='' loading="lazy"/>
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

    <h2 className="text-4xl font-bold text-center text-gray-800 mt-32"> Les différentes fonctionnalités  </h2>

          <section className="container mx-auto px-6 p-10 mt-8">
            
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3"> Diversité dans le choix de votre véhicule </h4>
                <p className="text-gray-600 mb-8"> Effectivement vous pouvez choisir la taille du véhicule en fonction de vos besoins. Comme le nombre de places, la taille du coffre, ou même le gabarit du véhicule. </p>
              </div>
              <div className="w-full md:w-1/2">
                <img className="rounded-lg" src="./assets/images/interrior2.jpg" alt="Vortex" loading="lazy"/>
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2">
                <img className="rounded-lg" src="./assets/images/driving.jpg" alt="use the force" loading="lazy"/>
              </div>
              <div className="w-full md:w-1/2 pl-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3"> Le covoiturage ! </h4>
                <p className="text-gray-600 mb-8"> Vous pouvez faire votre trajet en conduisant vos collègues s'ils vont à la même destination que vous. Le processus inverse est également possible, réserver un covoiturage en tant que passager.</p>
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3"> La fiche de vie de la voiture </h4>
                <p className="text-gray-600 mb-8"> Il est également possible de suivre la vie de la voiture, si elle a eu des accidents, etc...</p>
              </div>
              <div className="w-full md:w-1/2">
                <img className="rounded-lg" src="./assets/images/repair.jpg" alt="Syncing" loading="lazy"/>
              </div>
            </div>
          </section>
          <div className="simple-carousel">
            <a href="#" className="control_next"><i className="fa fa-chevron-right"></i></a>
            <a href="#" className="control_prev"><i className="fa fa-chevron-left"></i></a>
            <ul>
              <li className="slide" style={{backgroundColor: 'transparent'}}>
                <img src="./assets/images/911.jpg" loading="lazy"/>
              </li>
              <li className="slide" style={{backgroundColor: 'transparent'}}>
                <img src="./assets/images/panamera.jpg" loading="lazy" />
              </li>
              <li className="slide" style={{backgroundColor: 'transparent'}}>
                <img src="./assets/images/taycan.jpg" loading="lazy"/>
              </li>
              <li className="slide" style={{backgroundColor: 'transparent'}}>
                <img src="./assets/images/gt3.jpg" loading="lazy"/>
              </li>
              <li className="slide" style={{backgroundImage: 'url(https://wallpapershome.com/images/pages/pic_h/23795.jpg)'}}></li>
              <li className="slide" style={{backgroundImage: 'url(https://wallpapershome.com/images/pages/pic_h/23794.jpg)'}}></li>
              <li className="slide" style={{backgroundImage: 'url(https://wallpapershome.com/images/pages/pic_h/4589.jpg)'}}></li>
            </ul>
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800 mt-32"> Les témoignages </h2>

          <section className="bg-white">
            <div className="container mx-auto px-6 py-20">
              <div className="flex flex-wrap">
                
                <div className="w-full h-auto md:w-1/3 px-6 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded  py-2" style={{boxShadow: '0px 2px 20px lightgray'}}>
                    <p className="text-gray-800 text-base px-6 mb-5">How are you feeling, kid? You don't look so bad to me. In fact, you look strong enough to pull the ears off a Gundark. Thanks to you.</p>
                    <p className="text-gray-500 text-xs md:text-sm px-6"> Brandon NALIN</p>
                  </div>
                </div>
                
                <div className="w-full h-auto md:w-1/3 px-6 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded py-2" style={{boxShadow: '0px 2px 20px lightgray'}}>
                    <p className="text-gray-800 text-base px-6 mb-5">That's two you owe me, junior. Well your Worship, looks like you managed to keep me around for a little while longer. I had nothing to do with it.</p>
                    <p className="text-gray-500 text-xs md:text-sm px-6"> Antony Cochet </p>
                  </div>
                </div>
                
                <div className="w-full h-auto md:w-1/3 px-6 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded py-2" style={{boxShadow: '0px 2px 20px lightgray'}}>
                    <p className="text-gray-800 text-base px-6 mb-5">General Rieekan thinks it's dangerous for any ships to leave the system until we've activated the energy shield. That's a good story. I think you just can't bear to let a gorgeous guy like me out of your sight</p>
                    <p className="text-gray-500 text-xs md:text-sm px-6"> Michel Obama </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <footer className="bg-white mb-4" style={{display: 'flex'}}>

            <ul className="text-gray-600 flex justify-center w-full">
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

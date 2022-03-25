// Imports Used
import Navbar from "../Components/HomePage/Navbar"
import Header from "../Components/HomePage/Header"
import Features from "../Components/HomePage/Features"

// Home function
export default function Home() {

  return (

    <>
      <header className="header" id="header">
        <nav className="nav container-homepage">
          <a href="#" className="nav__logo">
            <i className="ri-steering-line"></i>
            N DevOps - Cars
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link"> Home </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link"> About </a>
              </li>
              <li className="nav__item">
                <a href="#popular" className="nav__link"> Popular </a>
              </li>
              <li className="nav__item">
                <a href="#featured" className="nav__link"> Featured </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav_toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home section" id="home">
          <div className="shape shape__big"></div>
          <div className="shape shape__small"></div>
          <div className="home__container container-homepage grid-homepage">
            <div className="home__data">
              <h1 className="home__title">
                Réverver la meilleure voiture
              </h1>

              <h2 className="home_subtitle">
                Porsche Mission E
              </h2>

              <h3 className="home__elec">
                <i className="ri-flashlight-fill"></i> Voiture électrique
              </h3>
            </div>

            <img src="/assets/img/home.png" alt="" className="home__img" />

            <div className="home__car">
              <div className="home__car-data">
                <div className="home__car-icon">
                  <i className="ri-temp-cold-line"></i>
                </div>
                <h2 className="home__car-number"> 24° </h2>
                <h3 className="home__car-name"> TEMPERATURE </h3>
              </div>

              <div className="home__car-data">
                <div className="home__car-icon">
                  <i className="ri-dashboard-3-line"></i>
                </div>
                <h2 className="home__car-number"> 873 </h2>
                <h3 className="home__car-name"> AUTONOMIE </h3>
              </div>

              <div className="home__car-data">
                <div className="home__car-icon">
                  <i className="ri-flashlight-fill"></i>
                </div>
                <h2 className="home__car-number"> 94% </h2>
                <h3 className="home__car-name"> BATTERIE </h3>
              </div>
            </div>

            <a href="#" className="home__button"> Réserver </a>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about__container container-homepage grid-homepage">
            <div className="about__group">
              <img src="assets/img/about.png" alt="" className="about__img" />

              <div className="about__card">
                <h3 className="about__card-title"> 2.500+ </h3>
                <p className="about__card-description">
                  Supercharges placed along popular routes
                </p>
              </div>
            </div>

            <div className="about__data">
              <h2 className="section__title about__title">
                Machines With <br /> Future Technology
              </h2>

              <p className="about__description">
                See the future with high-performance electric cars produced by
                renowned brands. They feature futuristic builds and designs with
                new and innovative platforms that last a long time.

              </p>

              <a href="#" className="button">  Know more </a>
            </div>
          </div>
        </section>

        <section className="popular section" id="popular">
          <h2 className="section__title"> Choose Your Electric Car <br /> Of The Porsche Brand </h2>

          <div className="popular__container container-homepage swiper">
            <div className="swiper-wrapper">
              <article className="popular__card swiper-slide">
                <div className="shape shape__smaller"></div>

                <h1 className="popular__title"> Porsche </h1>
                <h3 className="popular__subtitle"> Turbo S </h3>

                <img src="assets/img/popular1.png" alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7 sec
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-funds_box-line"></i> 356 Km/h
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>

                <h3 className="popular__price"> $175,900 </h3>

                <button className="popular__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>

              <article className="popular__card swiper-slide">
                <div className="shape shape__smaller"></div>

                <h1 className="popular__title"> Porsche </h1>
                <h3 className="popular__subtitle"> Taycan </h3>

                <img src="assets/img/popular2.png" alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7 sec
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-funds_box-line"></i> 356 Km/h
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>

                <h3 className="popular__price"> $114,900 </h3>

                <button className="popular__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>

              <article className="popular__card swiper-slide">
                <div className="shape shape__smaller"></div>

                <h1 className="popular__title"> Porsche </h1>
                <h3 className="popular__subtitle"> Turbo S Cross </h3>

                <img src="assets/img/popular3.png" alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7 sec
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-funds_box-line"></i> 356 Km/h
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>

                <h3 className="popular__price"> $150,900 </h3>

                <button className="popular__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>

              <article className="popular__card swiper-slide">
                <div className="shape shape__smaller"></div>

                <h1 className="popular__title"> Porsche </h1>
                <h3 className="popular__subtitle"> Boxster 718 </h3>

                <img src="assets/img/popular4.png" alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7 sec
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-funds_box-line"></i> 356 Km/h
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-charging-pile-2-line"></i> Electric
                  </div>
                </div>

                <h3 className="popular__price"> $125,900 </h3>

                <button className="popular__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>

              <article className="popular__card swiper-slide">
                <div className="shape shape__smaller"></div>

                <h1 className="popular__title"> Porsche </h1>
                <h3 className="popular__subtitle"> Cayman </h3>

                <img src="assets/img/popular5.png" alt="" className="popular__img" />

                <div className="popular__data">
                  <div className="popular__data-group">
                    <i className="ri-dashboard-3-line"></i> 3.7 sec
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-funds_box-line"></i>
                  </div>
                  <div className="popular__data-group">
                    <i className="ri-charging-pile-2-line"></i>
                  </div>
                </div>

                <h3 className="popular__price"> $128,900 </h3>

                <button className="popular__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>

        <section className="features section">
          <h2 className="section__title">
            More Features
          </h2>

          <div className="features__container container-homepage grid-homepage">
            <div className="features__group">
              <img src="assets/img/features.png" alt="" className="features__img" />

              <div className="features__card features__card-1">
                <h3 className="features__card-title"> 800v </h3>
                <p className="features__card-description"> Turbo <br /> Chargin </p>
              </div>

              <div className="features__card features__card-2">
                <h3 className="features__card-title"> 350 </h3>
                <p className="features__card-description"> Km <br /> Range </p>
              </div>

              <div className="features__card features__card-3">
                <h3 className="features__card-title"> 480 </h3>
                <p className="features__card-description"> KM <br /> Travel </p>
              </div>
            </div>
          </div>

          <img src="assets/img/map.svg" alt="" className="features__map" />
        </section>

        <section className="featured section" id="featured">
          <h2 className="section__title">
            Featured Luxury Card
          </h2>

          <div className="featured__container container-homepage">
            <ul className="featured__filters">
              <li>
                <button className="featured__item active_featured" data-filter="all">
                  <span> All </span>
                </button>
              </li>
              <li>
                <button className="featured__item" data-filter=".tesla">
                  <img src="assets/img/logo3.png" />
                </button>
              </li>
              <li>
                <button className="featured__item" data-filter=".audi">
                  <img src="assets/img/logo2.png" />
                </button>
              </li>
              <li>
                <button className="featured__item" data-filter=".porsche">
                  <img src="assets/img/logo1.png" />
                </button>
              </li>
            </ul>

            <div className="featured__content grid-homepage">
              <article className="featured__card mix tesla">
                <div className="shape shape__smaller"></div>

                <h1 className="featured__title"> Tesla </h1>

                <h3 className="featured__subtitle"> Model X </h3>

                <img src="assets/img/featured1.png" alt="" className="featured__img" />

                <h3 className="featured__price"> $98,000 </h3>

                <button className="button featured__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
              <article className="featured__card mix tesla">
                <div className="shape shape__smaller"></div>

                <h1 className="featured__title"> Tesla </h1>

                <h3 className="featured__subtitle"> Model 3 </h3>

                <img src="assets/img/featured2.png" alt="" className="featured__img" />

                <h3 className="featured__price"> $45,000 </h3>

                <button className="button featured__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
              <article className="featured__card mix audi">
                <div className="shape shape__smaller"></div>

                <h1 className="featured__title"> Audi </h1>

                <h3 className="featured__subtitle"> E-tron </h3>

                <img src="assets/img/featured3.png" alt="" className="featured__img" />

                <h3 className="featured__price"> $175,000 </h3>

                <button className="button featured__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
              <article className="featured__card mix porsche">
                <div className="shape shape__smaller"></div>

                <h1 className="featured__title"> Porsche </h1>

                <h3 className="featured__subtitle"> Boxster 987 </h3>

                <img src="assets/img/featured4.png" alt="" className="featured__img" />

                <h3 className="featured__price"> $126,000 </h3>

                <button className="button featured__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
              <article className="featured__card mix porsche">
                <div className="shape shape__smaller"></div>

                <h1 className="featured__title"> Porsche </h1>

                <h3 className="featured__subtitle"> Panamera </h3>

                <img src="assets/img/featured5.png" alt="" className="featured__img" />

                <h3 className="featured__price"> $126,900 </h3>

                <button className="button featured__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            </div>
          </div>
        </section>

        <section className="offer section">
          <div className="offer__container container-homepage grid-homepage">
            <img src="assets/img/offer-bg.png" alt="" className="offer__bg" />

            <div className="offer__data">
              <h2 className="section__title offer__title">
                Do You Want To Receive <br /> Special Offers?
              </h2>

              <p className="offer__description">
                Be the first to receive all the information about our
                products and new cars by email by subscribing to our
                mailing list.
              </p>

              <a href="#" className="button">
                Subscribe Now
              </a>
            </div>

            <img src="assets/img/offer.png" alt="" className="offer__img" />
          </div>
        </section>

        <section className="logos section">
          <div className="logos__container container-homepage grid-homepage">
            <div className="logos__content">
              <img src="assets/img/logo1.png" alt="" className="logos__img" />
            </div>
            <div className="logos__content">
              <img src="assets/img/logo2.png" alt="" className="logos__img" />
            </div>
            <div className="logos__content">
              <img src="assets/img/logo3.png" alt="" className="logos__img" />
            </div>
            <div className="logos__content">
              <img src="assets/img/logo4.png" alt="" className="logos__img" />
            </div>
            <div className="logos__content">
              <img src="assets/img/logo5.png" alt="" className="logos__img" />
            </div>
            <div className="logos__content">
              <img src="assets/img/logo6.png" alt="" className="logos__img" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="shape shape__big"></div>
        <div className="shape shape__small"></div>

        <div className="footer__container container-homepage grid-homepage">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <i className="ri-steering-line"></i> N Dev Ops - Cars
            </a>
            <p className="footer__description">
              Système de gestion d'un parc automobile <br />
              le plus reconnu <br />
              en France.
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer_title">
              Company
            </h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link"> About </a>
              </li>
              <li>
                <a href="#" className="footer__link"> Cars </a>
              </li>
              <li>
                <a href="#" className="footer__link"> History </a>
              </li>
              <li>
                <a href="#" className="footer__link"> Shop </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer_title">
              Information
            </h3>

            <ul className="footer__links">
              <li>
                <a href="" className="footer__link"> Request a quote </a>
              </li>
              <li>
                <a href="" className="footer__link"> Find a dealer </a>
              </li>
              <li>
                <a href="" className="footer__link"> Contact us </a>
              </li>
              <li>
                <a href="" className="footer__link"> Services </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer_title">
              Follow us
            </h3>

            <ul className="footer__social">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-twitter-line"></i>
              </a>
            </ul>
          </div>
        </div>

        <span className="footer__copy">
          &#169; Bedimcode. All rigths reserved
        </span>
      </footer>


      <a href="" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>

  )
}

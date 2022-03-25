if (typeof window === 'object') {
    // Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
        /*=============== SHOW MENU ===============*/
        const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close')

        /*===== MENU SHOW =====*/
        /* Validate if constant exists */
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        }

        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
            })
        }

        /*=============== REMOVE MENU MOBILE ===============*/
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction() {
            const navMenu = document.getElementById('nav-menu')
            // When we click on each nav__link, we remove the show-menu class
            navLink.forEach(n => n.addEventListener('click', linkAction))
        }

        /*=============== CHANGE BACKGROUND HEADER ===============*/
        function scrollHeader() {
            const header = document.getElementById('header')
            // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
            if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)

        /*=============== POPULAR SWIPER ===============*/
        let swiperPopular = new Swiper(".popular__container", {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 'auto',
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    spaceBetween: 48,
                },
            },
        });

        /*=============== MIXITUP FILTER FEATURED ===============*/
        // let mixerFeatured = mixitup('featured__content', {
        //     selectors: {
        //         target: '.featured__card'
        //     },
        //     animation: {
        //         duration: 300
        //     }
        // });

        /* Link active featured */


        /*=============== SHOW SCROLL UP ===============*/
        function scrollUp() {
            const scrollUp = document.getElementById('scroll-up');
            if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
        }

        window.addEventListener('scroll', scrollUp);

        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        function scrollActive() {
            const scrollY = window.pageYOffset

            SpeechRecognitionResult.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }
                else {
                    document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }

        window.addEventListener('scroll', scrollActive)

        /*=============== SCROLL REVEAL ANIMATION ===============*/
    });
}
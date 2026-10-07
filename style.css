/* =========================
   GLOBAL
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: #ffffff;
    color: #07111f;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
    cursor: pointer;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 7%;

    background: #05090f;
    color: white;

    position: relative;
    z-index: 1000;
}


/* LOGO */

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 23px;
    font-weight: 800;
}


.logo-icon {
    width: 32px;
    height: 32px;

    position: relative;

    transform: rotate(30deg);
}


.logo-icon span {
    position: absolute;

    width: 16px;
    height: 25px;

    background: #2995ff;

    top: 3px;
}


.logo-icon span:first-child {
    left: 1px;

    clip-path: polygon(
        50% 0,
        100% 25%,
        100% 75%,
        50% 100%,
        50% 50%
    );
}


.logo-icon span:last-child {
    right: 1px;

    background: #1671d1;

    clip-path: polygon(
        0 25%,
        50% 0,
        50% 50%,
        0 75%
    );
}


/* NAV LINKS */

.nav-links {
    display: flex;
    gap: 38px;
}

.nav-links a {
    font-size: 14px;
    font-weight: 600;

    transition: 0.3s;
}

.nav-links a:hover {
    color: #55aaff;
}

.nav-links span {
    margin-left: 4px;
}


/* NAV BUTTONS */

.nav-actions {
    display: flex;
    align-items: center;
    gap: 14px;
}


.search-btn {
    width: 35px;
    height: 35px;

    border: none;
    background: transparent;

    position: relative;
}


.search-btn::before {
    content: "";

    position: absolute;

    width: 12px;
    height: 12px;

    border: 2px solid white;
    border-radius: 50%;

    top: 8px;
    left: 7px;
}


.search-btn::after {
    content: "";

    position: absolute;

    width: 8px;
    height: 2px;

    background: white;

    transform: rotate(45deg);

    top: 22px;
    left: 20px;
}


.login-btn {
    padding: 10px 25px;

    border: 1px solid #3298ff;

    border-radius: 30px;

    font-size: 14px;
    font-weight: 600;

    transition: 0.3s;
}

.login-btn:hover {
    background: #3298ff;
}


.account-btn {
    padding: 11px 23px;

    background: #3198ff;

    border-radius: 30px;

    font-size: 14px;
    font-weight: 700;

    transition: 0.3s;
}

.account-btn:hover {
    transform: translateY(-2px);
    background: #1684ef;
}


/* MOBILE MENU BUTTON */

.menu-btn {
    display: none;

    border: none;
    background: transparent;

    color: white;

    font-size: 25px;
}


/* MOBILE MENU */

.mobile-menu {
    display: none;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 620px;

    display: grid;
    grid-template-columns: 45% 55%;

    position: relative;

    overflow: hidden;

    background: #05090f;
}


/* HERO LEFT */

.hero-content {
    padding: 90px 5% 90px 13%;

    color: white;

    position: relative;

    z-index: 5;
}


.small-title {
    font-size: 13px;
    font-weight: 700;

    letter-spacing: 3px;

    color: #379cff;

    margin-bottom: 18px;
}


.hero h1 {
    font-size: clamp(48px, 5vw, 76px);

    line-height: 0.98;

    font-weight: 900;

    letter-spacing: -3px;
}


.hero h1 span {
    color: #349aff;
}


.hero-description {
    max-width: 450px;

    margin-top: 28px;

    font-size: 18px;

    line-height: 1.6;

    color: #c5ced9;
}


.hero-buttons {
    display: flex;

    gap: 15px;

    margin-top: 35px;
}


.primary-btn {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 15px;

    padding: 15px 27px;

    border-radius: 30px;

    background: #3298ff;

    color: white;

    font-weight: 700;

    transition: 0.3s;
}


.primary-btn:hover {
    transform: translateY(-3px);

    box-shadow:
        0 10px 30px rgba(50, 152, 255, 0.35);
}


.secondary-btn {
    display: flex;

    align-items: center;

    padding: 15px 25px;

    border-radius: 30px;

    border: 1px solid #526070;

    color: white;

    font-weight: 600;

    transition: 0.3s;
}


.secondary-btn:hover {
    border-color: #3298ff;

    color: #3298ff;
}


/* =========================
   HERO IMAGE
========================= */

.hero-image {
    position: relative;

    overflow: hidden;
}


.hero-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;

    animation: imageZoom 15s infinite alternate;
}


@keyframes imageZoom {

    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.08);
    }

}


.image-overlay {
    position: absolute;

    inset: 0;

    z-index: 2;

    background:
        linear-gradient(
            90deg,
            #05090f 0%,
            rgba(5, 9, 15, 0.3) 20%,
            transparent 60%
        );
}


.image-text {
    position: absolute;

    z-index: 5;

    right: 8%;
    bottom: 70px;

    color: white;

    padding: 20px;

    border-left: 2px solid #349aff;

    backdrop-filter: blur(5px);
}


.image-text span {
    color: #3298ff;

    font-size: 12px;

    font-weight: 800;
}


.image-text p {
    margin-top: 7px;

    font-weight: 600;

    line-height: 1.5;
}


/* =========================
   HEXAGON SHAPES
========================= */

.hex {
    position: absolute;

    width: 170px;
    height: 190px;

    clip-path: polygon(
        25% 3%,
        75% 3%,
        100% 50%,
        75% 97%,
        25% 97%,
        0 50%
    );

    border: 1px solid rgba(80, 170, 255, 0.3);

    z-index: 3;
}


.hex-1 {
    top: -60px;
    left: -50px;

    background: rgba(50, 150, 255, 0.12);
}


.hex-2 {
    bottom: -80px;
    left: 30%;

    background: rgba(255, 255, 255, 0.04);
}


.hex-3 {
    top: 80px;
    right: 40%;

    background: rgba(255, 255, 255, 0.05);
}


.hex-4 {
    bottom: -50px;
    right: 8%;

    background: rgba(50, 150, 255, 0.1);
}


.hex-5 {
    top: 30px;
    right: 10%;

    background: rgba(255, 255, 255, 0.08);
}


.hex-6 {
    bottom: 40px;
    left: 4%;

    background: rgba(50, 150, 255, 0.08);
}


/* =========================
   SERVICES
========================= */

.services {
    min-height: 145px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    align-items: center;

    padding: 25px 9%;

    background: white;

    border-bottom: 1px solid #e5e9ee;
}


.service-card {
    display: flex;

    align-items: center;

    gap: 18px;

    padding: 15px 25px;

    border-right: 1px solid #e1e5ea;
}


.service-card:last-child {
    border-right: none;
}


.service-icon {
    min-width: 55px;
    height: 55px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #e9f4ff;

    color: #1679d8;

    font-size: 22px;
}


.service-card h3 {
    font-size: 16px;

    margin-bottom: 7px;
}


.service-card p {
    font-size: 13px;

    color: #657080;

    line-height: 1.4;
}


/* =========================
   TRUST
========================= */

.trust {
    position: relative;

    min-height: 330px;

    overflow: hidden;

    background: #09213b;

    color: white;
}


.trust-background {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(4, 24, 45, 0.98),
            rgba(4, 24, 45, 0.65)
        ),
        url("assets/bank.jpg");

    background-size: cover;

    background-position: center;

    opacity: 0.7;
}


.trust-content {
    position: relative;

    z-index: 2;

    display: flex;

    justify-content: space-between;

    align-items: center;

    min-height: 330px;

    padding: 50px 11%;
}


.trust-intro {
    max-width: 430px;
}


.trust-intro h2 {
    font-size: 42px;

    line-height: 1.05;

    margin-bottom: 18px;
}


.trust-intro > p:not(.small-title) {
    color: #d4dfeb;

    line-height: 1.6;

    margin-bottom: 22px;
}


.white-btn {
    padding: 13px 24px;

    border: none;

    border-radius: 30px;

    background: white;

    color: #09213b;

    font-weight: 700;
}


.stats {
    display: flex;

    gap: 60px;
}


.stat {
    padding-left: 35px;

    border-left: 1px solid rgba(255,255,255,0.4);
}


.stat strong {
    display: block;

    font-size: 38px;

    margin-bottom: 8px;
}


.stat span {
    color: #d3deea;

    line-height: 1.4;

    font-size: 14px;
}


/* =========================
   WHY
========================= */

.why {
    padding: 100px 11%;

    display: grid;

    grid-template-columns: 35% 65%;

    align-items: center;

    background: white;
}


.why-title h2 {
    font-size: 45px;

    line-height: 1.05;
}


.blue-line {
    width: 55px;
    height: 4px;

    margin-top: 25px;

    background: #3298ff;
}


.why-cards {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 35px;
}


.why-card {
    padding: 15px;
}


.why-icon {
    width: 60px;
    height: 60px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #e9f4ff;

    border-radius: 50%;

    font-size: 25px;

    margin-bottom: 20px;
}


.why-card h3 {
    font-size: 18px;

    margin-bottom: 10px;
}


.why-card p {
    color: #687383;

    line-height: 1.6;

    font-size: 14px;
}


/* =========================
   CTA
========================= */

.cta {
    position: relative;

    overflow: hidden;

    min-height: 430px;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    background: #05090f;

    color: white;
}


.cta-shape {
    position: absolute;

    width: 600px;
    height: 600px;

    background: #0d3158;

    opacity: 0.7;

    clip-path: polygon(
        25% 3%,
        75% 3%,
        100% 50%,
        75% 97%,
        25% 97%,
        0 50%
    );
}


.cta-content {
    position: relative;

    z-index: 2;
}


.cta h2 {
    font-size: 65px;

    line-height: 0.95;

    letter-spacing: -3px;

    margin-bottom: 30px;
}


.cta h2 span {
    color: #3298ff;
}


/* =========================
   FOOTER
========================= */

footer {
    background: #02060b;

    color: white;

    padding: 65px 11%;

    display: flex;

    justify-content: space-between;
}


.footer-logo {
    display: flex;

    align-items: center;

    gap: 10px;

    font-size: 23px;

    font-weight: 800;
}


.footer-links {
    display: flex;

    gap: 100px;
}


.footer-links div {
    display: flex;

    flex-direction: column;

    gap: 12px;
}


.footer-links h4 {
    margin-bottom: 10px;
}


.footer-links a {
    color: #8d99a8;

    font-size: 14px;
}


.footer-links a:hover {
    color: white;
}


.copyright {
    background: #02060b;

    color: #596574;

    text-align: center;

    padding: 20px;

    font-size: 12px;

    border-top: 1px solid #111a24;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {

    .nav-links {
        gap: 18px;
    }

    .account-btn {
        display: none;
    }

    .hero-content {
        padding-left: 8%;
    }

    .services {
        padding: 25px 4%;
    }

    .service-card {
        padding: 15px;
    }

    .trust-content {
        padding: 50px 7%;
    }

    .stats {
        gap: 25px;
    }

}


/* TABLET */

@media (max-width: 800px) {

    .nav-links,
    .nav-actions {
        display: none;
    }

    .menu-btn {
        display: block;
    }


    .mobile-menu {
        display: none;

        position: fixed;

        top: 74px;
        left: 0;
        right: 0;

        background: #05090f;

        padding: 25px;

        z-index: 999;

        flex-direction: column;

        gap: 20px;
    }


    .mobile-menu.active {
        display: flex;
    }


    .mobile-menu a {
        color: white;

        font-size: 17px;
    }


    .hero {
        grid-template-columns: 1fr;

        min-height: auto;
    }


    .hero-content {
        padding: 80px 8%;
    }


    .hero-image {
        height: 400px;
    }


    .services {
        grid-template-columns: repeat(2, 1fr);
    }


    .service-card:nth-child(2) {
        border-right: none;
    }


    .trust-content {
        flex-direction: column;

        align-items: flex-start;

        gap: 50px;
    }


    .stats {
        width: 100%;

        justify-content: space-between;
    }


    .why {
        grid-template-columns: 1fr;

        gap: 50px;
    }


    footer {
        flex-direction: column;

        gap: 50px;
    }

}


/* MOBILE */

@media (max-width: 550px) {

    .navbar {
        padding: 0 6%;
    }


    .hero h1 {
        font-size: 48px;
    }


    .hero-buttons {
        flex-direction: column;

        align-items: flex-start;
    }


    .services {
        grid-template-columns: 1fr;
    }


    .service-card {
        border-right: none;

        border-bottom: 1px solid #e5e9ee;

        padding: 20px 5px;
    }


    .stats {
        flex-direction: column;

        gap: 25px;
    }


    .stat {
        border-left: none;

        border-bottom: 1px solid rgba(255,255,255,0.3);

        padding-left: 0;

        padding-bottom: 20px;
    }


    .why {
        padding: 70px 8%;
    }


    .why-title h2 {
        font-size: 38px;
    }


    .why-cards {
        grid-template-columns: 1fr;
    }


    .cta h2 {
        font-size: 48px;
    }


    footer {
        padding: 50px 8%;
    }


    .footer-links {
        display: grid;

        grid-template-columns: repeat(2, 1fr);

        gap: 35px;
    }

}
/* =========================
   SCROLL ANIMATION
========================= */

.reveal {
    opacity: 0;

    transform: translateY(30px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}


.reveal.show {
    opacity: 1;

    transform: translateY(0);
}


/* Navbar on scroll */

.navbar {
    transition:
        background 0.3s ease,
        box-shadow 0.3s ease;
}


.navbar.scrolled {
    background: rgba(5, 9, 15, 0.95);

    box-shadow:
        0 5px 30px rgba(0,0,0,0.3);

    backdrop-filter: blur(10px);
}

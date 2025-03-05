import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const About = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
              Une experience digitale
                <img
                  className="mxw-20"
                  src="assets/images/banner/inside-title1.png"
                  alt="title"
                />
                <img
                  className="mxw-40"
                  src="assets/images/banner/inside-title2.png"
                  alt="title"
                />
                humaine
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
           {/*  <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
              Chez Digital Works, nous cassons les codes de la création de sites web en plaçant l’humain et la transparence au cœur de notre démarche.
              Chaque projet est une aventure, une collaboration où nous vous accompagnons du concept à la réussite, avec une approche sur-mesure, claire et engagée.
              Votre vision + Notre expertise = Un site web qui vous représente et qui cartonne !
              </div>
              <div className="row">
                <div className="col-xl-10">
                  <div className="client-logo-wrap">
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two1.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two2.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two3.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                2025
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Qui sommes-nous</span>
                <h2>L’Expérience Web Sur-Mesure Pensée Pour Vous</h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-creativity" />
                  <h5>Lancé en un éclair ou affiné au détail près</h5>
                </div>
                <p>
                Que vous ayez besoin d’un site rapide à mettre en ligne ou d’un développement sur-mesure, nous construisons des solutions efficaces et évolutives, adaptées à vos besoins
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-mobile-banking" />
                  <h5>Une expérience adaptée à tout support</h5>
                </div>
                <p>
                Nos sites sont 100% responsives, optimisés pour ordinateurs, tablettes et mobiles, garantissant une navigation fluide et une expérience utilisateur impeccable.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-optimization-1" />
                  <h5>SEO, RGPD et conformité : on s’occupe de tout</h5>
                </div>
                <p>
                Boostez votre visibilité avec un SEO performant et un site conforme aux normes RGPD respectant les aspects juridiques et réglementaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b></b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Vitrine</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>E-commerce</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Sur-mesure</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>SEO</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Accompagnement</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Team Area start */}
   {/*    <section className="team-area pt-130 rpt-100">
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/team/member6.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Patrick V. Schroeder</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image">
                  <img src="assets/images/team/member7.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/team/member8.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>James V. Decastro</h4>
                  <span>Senior Marketer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image">
                  <img src="assets/images/team/member9.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Troy V. Richardson</h4>
                  <span>Web Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/team/member10.jpg"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>Apps Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Team Area end */}
      {/* Statistics Area start */}
    {/*   <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> Nous recherchions une solution efficace pour gérer nos livraisons de plats et Digital Works a su répondre à nos attentes avec écoute et transparence. À chaque étape du projet, nous avons pu suivre l’avancement et ajuster nos besoins en toute confiance. Leur équipe a développé un back-office complet pour le suivi des commandes et la gestion des achats, nous offrant un outil performant et intuitif.
                        C'est avant tout une aventure humaine
                        {" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          {/* <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          /> */}
                        </div>
                        <div className="author-info">
                          <h4>D.F</h4>
                          <span className="designation">So Delicious</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> 
                        Digital Works, c’est bien plus qu’une agence. Leur écoute et accompagnement humain ont été essentiels pour comprendre nos besoins et développer un outil de gestion de campagnes SMS sur-mesure. Grâce à cette solution, nous avons simplifié notre gestion, gagné un temps précieux et optimisé notre organisation. Une vraie collaboration qui a transformé notre manière de travailler !
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        {/* <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div> */}
                        <div className="author-info">
                          <h4>A-M</h4>
                          <span className="designation">Nanterre-Dom</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                 {/*  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Client Logo Two start */}
      <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
     {/*    <div className="container">
          <div className="section-title text-center mb-60">
            <h4>Ils nous font confiance</h4>
          </div>
          <div className="client-logo-wrap">
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-7s">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};
export default About;

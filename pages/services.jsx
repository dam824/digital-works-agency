import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Services = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Créations
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                /><br />
                sur mesure<br/>
                Avec Passion et Expertise
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row gap-130">
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">01</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                      <a>Création & Développement Web</a>
                    </Link>
                  </h4>
                  <p>
                  Sites vitrines, e-commerce ou sur-mesure, nous développons avec les meilleures technologies pour un site rapide, sécurisé et évolutif.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">02</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                    Développement d’Applications Web & SaaS
                    </Link>
                  </h4>
                  <p>
                  Besoin d’une solution métier ou d’une plateforme SaaS performante ? Nous créons des applications adaptées à votre business et à vos besoins spécifiques.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">03</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                    Expérience Utilisateur & UI/UX Design
                    </Link>
                  </h4>
                  <p>
                  Un design qui capte l’attention, une navigation fluide et intuitive : nous optimisons chaque détail pour maximiser l’engagement de vos visiteurs.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">04</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                    SEO & Référencement Naturel
                    </Link>
                  </h4>
                  <p>
                  Un site visible sur Google, c’est essentiel. Nous optimisons votre référencement pour booster votre trafic et améliorer votre positionnement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">05</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                      <a>Conformité RGPD</a>
                    </Link>
                  </h4>
                  <p>
                  Un site conforme aux exigences RGPD : transparence sur la collecte des données, 
  gestion des consentements, sécurisation des informations et respect des droits des utilisateurs. 
  Protégez votre activité et assurez une conformité sans faille.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">06</span>
                  <Link legacyBehavior href="/service-details">
                    <a className="details-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="/service-details">
                      Accompagnement personnalisé
                    </Link>
                  </h4>
                  <p>
                  Accompagnement personnalisé en matière de réglementation : nous vous guidons sur les obligations RGPD et la conformité CNIL, pour une protection optimale de vos données et celles de vos utilisateurs.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
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
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">01</span>
                <h4 className="title">Idée & Stratégie</h4>
                <div className="content">
                  <p>On définit ensemble votre projet et ses objectifs.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">02</span>
                <h4 className="title">Conception & Design</h4>
                <div className="content">
                  <p>Un design soigné, pensé pour vous</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">03</span>
                <h4 className="title">Développement & Tests</h4>
                <div className="content">
                  <p>Optimisation SEO & RGPD.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">04</span>
                <h4 className="title">Lancement & Accompagnement</h4>
                <div className="content">
                  <p>Mise en ligne rapide suivi personnalisé</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-line-shape">
            <img
              src="assets/images/shapes/work-process-line.png"
              alt="Work Process Line"
            />
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
    {/*   <section className="testimonial-section pt-95 rpt-65 pb-130 rpb-100">
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
                  </SwiperSlide>
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
      </section> */}
      {/* Testimonial Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Services;

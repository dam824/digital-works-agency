import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    const lazyBackgrounds = document.querySelectorAll(".lazyload");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let el = entry.target;
            let bg = el.getAttribute("data-bg");
            if (bg) {
              el.style.backgroundImage = `url(${bg})`;
              el.classList.remove("lazyload"); // Pour éviter de recharger l'image
              observer.unobserve(el);
            }
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1, // Charge l'image un peu avant qu'elle apparaisse
      }
    );
  
    lazyBackgrounds.forEach((el) => observer.observe(el));
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout dark>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                DigitalWorks <span>Agence</span> <i>web</i>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
              
                <Image
                      src="/assets/images/hero/hero-right.png"
                      alt="Image de bureaux de l'ange Digital Works"
                      width={351}  
                      height={307}  
                      priority  
    
                    />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
           
            <Image
                      src="/assets/images/hero/home-banner-2.webp"
                      alt="Image de bureaux de l'ange Digital Works"
                      width={1237}  
                      height={588}  
                      priority  
    
                    />
            <div className="hero-social">
              
              <a href="https://www.linkedin.com/in/dagorydamien/">
                <i className="fab fa-linkedin" /> <span>Linkedin</span>
              </a>
              
            </div>
          </div>
        </div>
       
      </section>
    
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
           
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Digital Works - L’agence qui propulse ton business en ligne</span>
                  <h2>
                  Innovation - Créativité - Performance
                  </h2>
                </div>
                <div className="content">
                  <p>
                  Nous créons des sites web modernes et performants pour les entreprises et entrepreneurs qui veulent marquer les esprits. Que ce soit un site vitrine, e-commerce ou une solution sur-mesure, nous allions design percutant et technologies de pointe pour booster ta visibilité.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      En savoir plus <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
            Moins de blabla <span>&</span> Plus de résultats
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Ce qu’on fait </span>
                  <h2>Du digital, mais surtout de l'humain</h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Un Site Pensé Pour Vous, Avec Vous</h5>
                    <p>
                    Chaque projet est unique, comme vous.
                    Nous créons des sites qui reflètent votre identité et vos ambitions.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>En savoir plus</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Plus Qu’un Site, Une Stratégie</h5>
                    <p>
                    Un site web ne suffit pas, il doit être performant.
                    Nous vous accompagnons pour qu’il atteigne son plein potentiel.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>En savoir plus</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>Performance, SEO & Conformité</h5>
                    <p>
                    Un site visible, rapide et sécurisé, c’est essentiel.  
                    On optimise chaque détail : référencement (SEO), protection des données (RGPD) et performances techniques.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>En savoir plus</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
               
                    <Image
                      src="/assets/images/services/digital-works-office-1.webp"
                      alt="Image de bureaux de l'ange Digital Works"
                      width={647}  
                      height={901}  
                      loading="lazy"  
    
                    />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Nos Solutions Web : Puissance, Performance et Flexibilité</span>
                <h2>Des solutions digitales adaptées à vos besoins </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Création de sites web</a>
                    </Link>
                  </h5>
                  
                  <Image
                      src="/assets/images/services/code.png"
                      alt="icon"
                      width={60}  
                      height={60}  
                      priority  
    
                    />
                </div>
                <div className="content">
                  <p>Nous concevons des sites vitrines, e-commerce et applications web adaptés à vos objectifs et à votre identité</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>En savoir plus</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Technologies modernes</a>
                    </Link>
                  </h5>
                  
                  <Image
                      src="/assets/images/services/setting.png"
                      alt="icon"
                      width={60}  
                      height={60}  
                      priority  
    
                    />
                </div>
                <div className="content">
                  <p>Nous choisissons les solutions techniques les plus adaptées à vos besoins pour garantir performance et évolutivité.</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>En savoir plus</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Expertise SEO et Référencement</a>
                    </Link>
                  </h5>
                  
                  <Image
                      src="/assets/images/services/seo.png"
                      alt="icon"
                      width={60}  
                      height={60}  
                      priority  
    
                    />
                </div>
                <div className="content">
                  <p>Nous optimisons chaque détail pour maximiser votre présence sur Google et améliorer l’expérience utilisateur.</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>En savoir plus</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Sécurité & conformité</a>
                    </Link>
                  </h5>
                 
                  <Image
                      src="/assets/images/services/verified.png"
                      alt="icon"
                      width={60}  
                      height={60}  
                      priority  
    
                    />
                </div>
                <div className="content">
                  <p>Nous garantissons des développements respectant les standards de sécurité et la conformité aux réglementations.</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>En savoir plus</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span> </span> DIGITAL WORKS 
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Nos Réalisations</span>
                <h2>Création de Sites Web Modernes & Performants</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="projects">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  Nos projets<i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href="creation-web">
                  <a>Site vitrine</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <Image
                src="/assets/images/projects/novagroupe.webp"
                alt="Project TimeLine Image"
                width={374}
                height={245}
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="projects">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href="solution-sur-mesure">
                  <a>Solution Sass</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <Image
                src="/assets/images/projects/nanterre-dom.webp"
                alt="Project TimeLine Image"
                width={374}
                height={245}

              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="projects">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href="consulting">
                  <a>Expertise SEO & réglementations RGPD</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <Image
                src="/assets/images/projects/seo2.webp"
                alt="Project TimeLine Image"
                width={374}
                height={245}
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
     
      <div className="headline-area pt-65 rpt-55 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
             <span>Découvrez</span> Nos Offres
            </span>
          </div>
        </div>
      </div>
 
      <section className="pricing-area-three pt-85">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Une Collaboration Humaine & Sur-Mesure</span>
                <h2>Des solutions adaptées à vos besoins et à Votre Budget</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-2s">
            <div className="pricing-banner lazyload" data-bg="assets/images/background/background.webp">
                <span className="join-us">Rejoignez l'aventure</span>
                <h4>Des Offres Sur-Mesure Pour Booster Votre Visibilité et Votre Croissance</h4>
                <Link legacyBehavior href="/pricing">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <div className="hand-shape">
                  
                   <Image
                      src="/assets/images/shapes/pricing-banner-hand-shape.png"
                      alt="Pricing Banner Shape"
                      width={102}  
                      height={110}  
                      priority  
    
                    />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-4s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <div className="icon">
                    
                    <Image
                      src="/assets/images/shapes/pricing-banner-hand-shape.png"
                      alt="Icon de l'offre starter"
                      width={60}  
                      height={60}  
                      priority  
    
                    />
                  </div>
                  <h5>Pack Starter</h5>
                </div>
                <p>
                Pour être en ligne rapidement et efficacement
                </p>
                <ul className="list-style-one">
                  <li>Landing Page</li>
                  <li>Site vitrine</li>
                  <li>Optimisation SEO</li>
                  <li>Sécurité & hébergement basique</li>
                  <li>Responsive Design</li>
                  <li>Support & Assistance de Démarrage</li>
                </ul>
                <br />
             
                <Link legacyBehavior href="contact">
                  <a className="theme-btn w-100">
                    Demander un devis <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-6s">
              <div
                className="pricing-plan-item style-three"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/pricing-plan-bg.png)",
                }}
              >
                <div className="icon-title">
                  <div className="icon">
                     
                    <Image
                      src="/assets/images/icons/boost.png"
                      alt="Icon de l'offre boost"
                      width={60}  
                      height={60}  
                      priority  
    
                    />
                  </div>
                  <h5>Pack Boost</h5>
                </div>
                <p>
                Idéal pour : E-commerce, SaaS, entreprises avec un besoin sur-mesure
                </p>
                <ul className="list-style-one">
                  <li>Site e-commerce </li>
                  <li>Sass </li>
                  <li>Développement sur-mesure</li>
                  <li>Optimisation SEO</li>
                  <li>Responsive design</li>
                  <li>Support & Assistance de Démarrage</li>
                </ul>
                <br />
             
                <Link legacyBehavior href="contact">
                  <a className="theme-btn w-100">
                    Demander un devis <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="why-choose-area pt-90 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7">
              <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s">
              
                   <Image
                      src="/assets/images/services/digital-works-a-vos-cotes.webp"
                      alt="Pourquoi nous choisir"
                      width={875}  
                      height={517}
                      loading="lazy"   
    
                    />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="why-choose-two-wrap">
                <div className="section-title mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Pourquoi Nous Choisir ?</span>
                  <h2>À Vos Côtés Pour Un Site Qui Vous Ressemble</h2>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-3s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Des Solutions Web Adaptées à Votre Projet</a>
                      </Link>
                    </h4>
                    <p>
                    Nous analysons vos besoins pour créer un site sur-mesure, performant et évolutif.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-5s">
                  <div className="icon">
                    <i className="fas fa-check" />
                    <span className="icon-bottom-shape" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Un Accompagnement Humain et Transparent</a>
                      </Link>
                    </h4>
                    <p>
                    De la conception à la mise en ligne, nous vous guidons à chaque étape, sans jargon technique inutile.
                    </p>
                  </div>
                </div>
                <div className="why-choose-item-two wow fadeInUp delay-0-7s">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Performance, Sécurité et Visibilité Optimale</a>
                      </Link>
                    </h4>
                    <p>
                    Optimisation SEO, rapidité, conformité RGPD : nous faisons en sorte que votre site soit en conformité avec les règles en vigeurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Notre mission</span> votre succès
            </span>
          </div>
        </div>
      </div>

    </Layout>
  );
};
export default Index;

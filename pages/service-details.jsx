import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const ServiceDetails = () => {
  const accordionData = [
    { 
      id: 1, 
      title: "Combien coûte la création d’un site web ?", 
      content: "Le coût dépend de la complexité du projet. Nous proposons des solutions adaptées à tous les budgets. Contactez-nous pour un devis personnalisé."
  },
  { 
      id: 2, 
      title: "Combien de modifications puis-je demander ?", 
      content: "Nous offrons un certain nombre de modifications en fonction du pack choisi. Notre objectif est que vous soyez pleinement satisfait de votre site."
  },
  { 
      id: 3, 
      title: "Offrez-vous un accompagnement après la mise en ligne ?", 
      content: "Oui ! Nous proposons un suivi après la mise en ligne, des formations et des mises à jour pour assurer la pérennité de votre site."
  },
  { 
      id: 4, 
      title: "Comment savoir si mon site est conforme et respecte le devis ?", 
      content: "Nous faisons un point complet avant la mise en ligne : SEO, RGPD, performances... Tout est passé en revue avec vous, en toute transparence."
  }
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Solutions sur mesure 
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/service-page-about.jpg"
                  alt="About"
                />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link>
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Conception & Développement sur-mesure</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Ce que nous faisons</span>
                  <h2>Des Solutions Web Sur-Mesure Pour Votre Croissance</h2>
                </div>
                <div className="content">
                  <p>
                  Nous concevons des outils digitaux puissants et évolutifs. CRM, plateformes e-commerce avancées, solutions SaaS et back-offices sur-mesure. Notre mission ? Vous offrir un gain de temps, d’efficacité et de rentabilité grâce à des technologies adaptées à vos besoins.
                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Développement de solutions SaaS & CRM</li>
                    <li>Automatisation & Optimisation des Processus</li>
                    <li>Back-office intuitif & Gestion avancée</li>
                  </ul>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10 color-primary">
                    En savoir plus <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* How We Works start */}
      <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title mb-40 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Notre Méthode</span>
            <h2>Transformer Vos Besoins en Solutions Sur-Mesure</h2>
            <div className="text mt-30">
              <p>
              Chaque projet commence par une vision. Chez Digital Works, nous transformons vos idées en solutions digitales performantes grâce à une approche structurée, transparente et centrée sur l’humain. De la stratégie à la mise en ligne, nous vous accompagnons à chaque étape pour un résultat à la hauteur de vos ambitions
              </p>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-2s">
                <span className="step-number">01</span>
                <h4 className="title">Analyse </h4>
                <div className="content">
                  <p>On analyse vos besoins et objectifs pour définir l’approche technique idéale adapté à votre budget.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-3s">
                <span className="step-number">02</span>
                <h4 className="title">Prototypage</h4>
                <div className="content">
                  <p>UX/UI design, parcours utilisateur et maquettes interactives : on façonne une expérience optimisée et intuitive</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item wow fadeInUp delay-0-4s">
                <span className="step-number">03</span>
                <h4 className="title">Développement</h4>
                <div className="content">
                  <p>On code une solution sur mesure, performante et évolutive, intégrant les meilleures pratiques en sécurité.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="work-step-item arrow-none wow fadeInUp delay-0-5s">
                <span className="step-number">04</span>
                <h4 className="title">Lancement</h4>
                <div className="content">
                  <p>Mise en ligne, formation et suivi : on s’assure que votre solution fonctionne parfaitement et évolue avec votre activité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How We Works end */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Why Choose Us start */}
      <section className="why-choose-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Pourquoi Nous Choisir
                  </span>
                  <h2>Une Agence Web de Confiance</h2>
                </div>
                <div className="row gap-60">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Des solutions adaptées à votre budget</h5>
                      </div>
                      <p>
                      Pas de coûts cachés, juste une transparence totale et des offres adaptées à vos besoins.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Un développement sur-mesure et évolutif</h5>
                      </div>
                      <p>
                      Des outils performants, pensés pour grandir avec votre projet.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Un accompagnement humain à chaque étape</h5>
                      </div>
                      <p>
                      Pas de jargon compliqué : on vous explique tout et on avance ensemble, étape par étape.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Une expérience fluide et intuitive</h5>
                      </div>
                      <p>
                      Des sites et applications conçus pour être agréables, ergonomiques et performants sur tous les supports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right style-two wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right-two.jpg"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text-two.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-95 pb-105 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq.png" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Foire Aux Questions</span>
                  <h2>Des réponses claires pour un projet en toute sérénité</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      content={data.content}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active == `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ServiceDetails;

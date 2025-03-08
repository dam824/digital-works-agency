import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const ServiceDetails2 = () => {
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
      {/* Page Banner Start */}
      <PageBanner pageName={"Audit Web & Consulting en Conformité"} />
      {/* Page Banner End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center justify-content-end">
            <div className="col-xl-5">
              <div className="about-content mb-35 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Optimisez, Sécurisez, et Validez Vos Projets Digitaux</span>
                  <h2>
                  On s’assure que vous avez ce pour quoi vous avez payé
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="service-list mb-35 wow fadeInUp delay-0-4s">
                    <ul className="list-style-three">
                      <li>Audit de Performance Web</li>
                      <li>SEO & Visibilité</li>
                      <li>Conformité RGPD & Sécurité</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-list mb-35 wow fadeInUp delay-0-6s">
                    <ul className="list-style-three">
                    <li>Vérification des Prestations</li>
                      <li>Accompagnement Juridique</li>
                      <li>Recommandation & plan d'actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="image pt-30 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/about-bottom.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
        <span className="big-text">Audit & Consulting</span>
      </section>
      {/* Services Page About Area end */}
      {/* Service Style Two start */}
      <section className="service-two-area pt-90 rpt-45 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-xl-10">
                  <div className="section-title mb-30 wow fadeInRight delay-0-2s">
                    <span className="sub-title mb-15">Ce Que Nous Faisons</span>
                    <h2>Audit Web & Consulting en Conformité</h2>
                    <div className="text pt-20">
                    Nous allons au-delà du développement avec des audits complets pour assurer performance, conformité et transparence. SEO, RGPD, sécurité, analyse des contrats : nous optimisons et sécurisons vos solutions web.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-two wow fadeInLeft delay-0-2s">
                <div className="icon">
                  <i className="fal fa-gem" />
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                  Analyse
                  </Link>
                </h5>
                <p>Diagnostic précis,
                évaluation de la structure et les axes d’amélioration.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more style-two">
                    <span>En savoir plus</span> <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-two wow fadeInLeft delay-0-4s">
                <div className="icon">
                  <i className="fal fa-ball-pile" />
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                  Audit de Performance & SEO
                  </Link>
                </h5>
                <p>
                Analyse de la vitesse et, SEO pour optimiser votre site.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more style-two">
                    <span>En savoir plus </span> <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-two wow fadeInLeft delay-0-2s">
                <div className="icon">
                  <i className="fal fa-code" />
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                  Conformité RGPD
                  </Link>
                </h5>
                <p>Vérification de sécurité, confidentialité et normes légales.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more style-two">
                    <span>En savoir plus</span> <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-two wow fadeInLeft delay-0-4s">
                <div className="icon">
                  <i className="fal fa-tools" />
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                  Vérification des Prestations
                  </Link>
                </h5>
                <p>Analyse des prestations et conformité de devis.</p>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more style-two">
                    <span>En savoir plus</span> <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-item style-two wow fadeInLeft delay-0-6s">
                <div className="icon">
                  <i className="fal fa-ufo-beam" />
                </div>
                <h5>
                  <Link legacyBehavior href="/service-details">
                  Accompagnement Juridique
                  </Link>
                </h5>
                <p>Conseils en droit numérique, RGPD et litiges web</p>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more style-two">
                    <span>En savoir plus</span> <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Two end */}
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
      {/* Pricing start */}
      <section className="pricing-plan-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-75 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Nos solutions</span>
                <h2>Des Audits Web Pour un Site Sécurisé et Conforme</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-abstract" />
                </div>
                <h5>Audit Essentiel</h5>
                <span className="price-text">
                 {/*  <span className="before">$</span>
                  <span className="price">18.3</span>{" "} */}
                  <span className="after">Une vision claire de votre site</span>
                </span>
                <ul className="list-style-one">
                  <li>Analyse des performances sur tout supports</li>
                  <li>Analyse de la mise en place de référencement naturel</li>
                  <li>Vérification des normes et conformité RGPD</li>
                  <li>Test de compatibilité sur différents supports (responsive) </li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                     Demander un devis <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  Formule du moment
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <i className="flaticon-liquid" />
                </div>
                <h5>Audit Expert</h5>
                <span className="price-text">
                  {/* <span className="before">$</span>
                  <span className="price">49.3</span>{" "} */}
                  <span className="after">Optimisation & sécurité avancées</span>
                </span>
                <ul className="list-style-one">
                  <li>Audit approfondie de performance détaillé</li>
                  <li>Détection des failles de sécurité dans le code</li>
                  <li>Analyse approfondie de la conformité RGPD</li>
                  <li>Recommandations stratégiques d’amélioration</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Demander un devis <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-petals" />
                </div>
                <h5>Audit Premium</h5>
                <span className="price-text">
                  {/* <span className="before">$</span>
                  <span className="price">98.3</span>{" "} */}
                  <span className="after">Expertise complète & accompagnement</span>
                </span>
                <ul className="list-style-one">
                  <li>Audit & Détection des failles de sécurité</li>
                  <li>Vérification des prestations livrées par vos prestataires</li>
                  <li>Analyse des contrats et conformité des engagements</li>
                  <li>Accompagnement juridique pour faire valoir vos droits</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Demander un devis <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bg-shape"
          style={{
            backgroundImage:
              "url(assets/images/footer/footer-bg-shape-two.png)",
          }}
        />
      </section>
      {/* Pricing end */}
      {/* FAQ's Area start */}
     {/*  <section className="faq-area pt-90 rpt-55 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-5">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-two.jpg" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions</h2>
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
        <div className="faq-shapes">
          <img
            className="shape left"
            src="assets/images/shapes/ellipse-left.png"
            alt="Shape"
          />
          <img
            className="shape right"
            src="assets/images/shapes/ellipse-right.png"
            alt="Shape"
          />
        </div>
      </section> */}
      {/* FAQ's Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Nos réalisations</span>
                <h2>Besoin d’experts ? Vous êtes au bon endroit !</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Voir nos réalisations</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ServiceDetails2;

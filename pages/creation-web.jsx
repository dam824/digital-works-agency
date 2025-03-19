import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import YgencyAccordion from "@/src/components/YgencyAccordion";
const Services = () => {
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
    
    </Layout>
  );
};
export default Services;

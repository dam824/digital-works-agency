import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectList = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Project List"} />
      {/* Page Banner End */}
      {/* Project List Area start */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/novagroupe.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="novagroupe.eu">
                <a className="category">Projet web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Site <i>Vitrine</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Refonte graphique complète selon les exigences du client, en collaboration avec l'agence <a href="https://m-com.fr/">Mcom.</a>  <br />
                Spécialiste français des poêles, inserts, cheminées et cuisinières à bois, proposant des produits haut de gamme conçus avec des matériaux de qualité.
              </p>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Projet web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="https://europbots.com/">
                  <a>
                    Site <i>Vitrine</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
              Intégration front-end et animations du site vitrine en collaboration avec l'agence web <a href="https://redcat-studio.fr">Redcat Studio.</a>
              Développement réalisé à partir des maquettes fournies par leur équipe de graphistes, garantissant une interface fluide et immersive.
            </p>
              
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/europots2.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/azul1.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Projet Web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Site <i>Vitrine</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
              Développement front-end et animations réalisées en partenariat avec l'agence web <a href="https://redcat-studio.fr">Redcat Studio.</a>.  
              L’intégration a été effectuée à partir des maquettes conçues par leur équipe graphique, assurant une navigation fluide et un rendu visuel impactant.
            </p>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Solution Sass</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Logiciel <i>Sur Mesure</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
              Développement sur mesure d’un outil d’automatisation des envois de SMS, optimisant la gestion du temps et fluidifiant la communication.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/nanterre-dom-1.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/prometal1.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Projet Web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Site <i>Vitrine</i>
                  </a>
                </Link>
              </h2>
              <hr />
                <p>
                Développement d’un site vitrine réalisé from scratch en collaboration avec l'agence web <a href="https://m-com.fr"> Mcom.</a> <br /> 
                Design, intégration des contenus et animations ont été entièrement pris en charge, garantissant une interface fluide et immersive.
              </p>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Maquette</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Application <i>Mobile</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
              Conception de maquettes d’application mobile en collaboration avec l'agence web <a href="https://m-com.fr"> Mcom.</a> <br /> 
              Création d’une interface ergonomique et intuitive, pensée pour offrir une expérience utilisateur optimale et fluide.
            </p>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/quick-parking.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/harmonia.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Projet Web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Site <i>Vitrine</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
              Développement d’un site vitrine réalisé from scratch en collaboration avec l'agence web  
              <a href="https://m-com.fr"> Mcom.</a> <br />  
              De la conception à l’intégration, chaque élément a été pensé pour offrir une navigation fluide et une expérience utilisateur optimisée.
            </p>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Projet Web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Site <i>Vitrine</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Création d’un site vitrine entièrement sur-mesure avec  
                <a href="https://m-com.fr"> Mcom.</a> <br />  
                Design, intégration des contenus et animations ont été travaillés pour refléter parfaitement l’identité et les objectifs du client.
              </p>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/smr.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/so-delicious.webp"
                alt="Project List"
                width={520}
                height={535}
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Projet Web</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Site <i>E-commerce</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
              Développement d’un e-commerce sur mesure avec back-office intuitif, gestion des produits, suivi des commandes et intégration des paiements sécurisés. Automatisation des campagnes newsletters pour maximiser l’engagement client
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Plus d'informations <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
      {/* Project List Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15"></span>
                <h2>Un projet en tête ? On le concrétise !</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Nous contacter</span>
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
export default ProjectList;

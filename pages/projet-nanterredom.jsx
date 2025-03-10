import Layout from "@/src/layout/Layout";
const ProjectDetails = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                Développement sur mesure
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf-small.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
             Solution SaaS développée pour optimiser la gestion des campagnes de communication via l’automatisation des envois de SMS. Conçu pour répondre aux besoins des entreprises et institutions ayant des volumes importants de messages à traiter, ce projet permet d'améliorer la réactivité, de réduire les tâches chronophages et d'assurer une meilleure organisation des communications. Grâce à une interface intuitive, les utilisateurs peuvent programmer, personnaliser et suivre leurs envois de SMS en toute autonomie, offrant ainsi une gestion plus efficace des interactions avec leurs clients et partenaires.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="image wow fadeInUp delay-0-2s">
            <img
              src="assets/images/project-detail/nanterredom0.webp"
              alt="Project"
            />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Informations du projet</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5>Client</h5>
                  <p className="sub-title mb-20">Nanterre Dom</p>
                </div>
                <div className="col">
                  <h5>Categorie</h5>
                  <p className="sub-title mb-20">Sass</p>
                </div>
             
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">La mission</h3>
            </div>
            <div className="col-lg-8">
              <div className="big-letter text">
              Mise en place d'une solution SaaS robuste et évolutive permettant aux administrateurs d’avoir une autonomie totale dans la gestion de leurs campagnes SMS. Le projet repose sur plusieurs fonctionnalités clés :
              <br />
              <ul>
                <li>Interface d’administration ergonomique, permettant une prise en main rapide et simplifiée.</li>
                <li>Gestion avancée des campagnes SMS, avec la possibilité de planifier des envois, de créer des listes de diffusion et d'automatiser les rappels.</li>
                <li>Mettre en avant des produits du moment, avec un module permettant de gérer les recommandations et promotions en quelques clics.</li>
                <li>Modifier les visuels et les descriptions des produits sans aucune intervention technique, via une interface intuitive.</li>
                <li>Assurer la scalabilité grâce à un hébergement sur un serveur dédié Debian 10, garantissant sécurité et performance.</li>
              </ul>
               <br />

              
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/project-detail/nanterredom1.webp"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/project-detail/nanterredom2.webp"
                  alt="Project"
                />
              </div>
            </div>
          </div>
          <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Résultat</h3>
            </div>
            <div className="col-lg-8">
              <div className="text">
              Grâce à cette architecture sur mesure, l'administrateur dispose d'un contrôle total sur son activité, optimisant la gestion des commandes et l'expérience client, tout en maintenant une flexibilité pour l’évolution du catalogue et des offres.
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Project Details Content Area End */}
      {/* Next Prev Post Area start */}
      {/* <section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src="assets/images/projects/prev-project.jpg" alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Digital Product Design
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Web Development
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src="assets/images/projects/next-project.jpg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Next Prev Post Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectDetails;

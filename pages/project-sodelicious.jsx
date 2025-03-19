import Layout from "@/src/layout/Layout";
import Link from "next/link";
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
              So Delicious est une plateforme e-commerce innovante qui réinvente la restauration rapide en alliant plaisir, qualité et bien-être. Conçu pour proposer une alternative saine aux fast-foods classiques, ce projet met en avant des produits locaux, frais et équilibrés. Grâce à une interface intuitive et fluide, les utilisateurs peuvent parcourir les menus, filtrer les plats en fonction de leurs préférences, s'inscrire rapidement sans confirmation d'email, enregistrer plusieurs adresses et passer commande en quelques clics. Intégré avec Stripe pour un paiement sécurisé et un back-office administrable, So Delicious simplifie l'expérience utilisateur tout en garantissant une flexibilité optimale pour l'évolution du catalogue.
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
              src="assets/images/project-detail/sodelicious0.webp"
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
                  <p className="sub-title mb-20">So Delicious</p>
                </div>
                <div className="col">
                  <h5>Categorie</h5>
                  <p className="sub-title mb-20">E-Commerce</p>
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
              L'objectif principal : mise en place d'une solution e-commerce complète, permettant à l’administrateur de gérer son activité en toute autonomie via un back-office conçu sur mesure. L'objectif était de fournir une interface ergonomique et évolutive pour
              <br />
              <ul>
                <li>Suivre l’état des commandes en temps réel, avec un système de gestion des statuts (en attente, en préparation, livré, annulé).</li>
                <li>Contrôler les paiements grâce à l’intégration de Stripe, avec une gestion simplifiée des transactions et remboursements.</li>
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
                  src="assets/images/project-detail/sodelicious1.webp"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/project-detail/sodelicious2.webp"
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
    
    </Layout>
  );
};
export default ProjectDetails;

import Layout from "@/src/layout/Layout";
import Link from "next/link";
const E404 = () => {
  return (
    <Layout dark>
      <section
        className="error-section pt-220 rpt-120 pb-100 rpb-80 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="error-content rmb-55 wow fadeInRight delay-0-2s">
                <h1>OUPS!</h1>
                <div className="section-title mb-50 rmb-35">
                  <h2>Cette page n'exsite pas</h2>
                </div>
                <Link legacyBehavior href="/">
                  <a className="theme-btn style-two">
                    Retour à l'accueil <i className="far fa-arrow-right" />
                  </a>
                </Link>
               
              </div>
            </div>
            <div className="col-lg-7">
              <div className="error-image wow zoomIn delay-0-2s">
                <img
                  src="assets/images/background/404-error.png"
                  alt="404 Error"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </Layout>
  );
};
export default E404;

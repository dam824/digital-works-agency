import PreLoader from "@/src/layout/PreLoader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import niceSelect from "react-nice-select";
import Script from "next/script"; 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      niceSelect();
    }, 500);
  });

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    const noscriptTag = document.createElement("noscript");
    noscriptTag.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8PCZB8K" 
                             height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.prepend(noscriptTag);
  }, []);

  return (
    <Fragment>
      <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="DigitalWorks, agence web spécialisée en création de sites internet et SEO à Franconville, Les Herbiers et Cholet. Boostez votre visibilité locale avec nos solutions digitales sur-mesure. Contactez-nous !" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title */}
        <title>DigitalWorks - Agence Web & SEO | Création de site internet</title>
        {/* Favicon Icon */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.svg"
          type="image/x-icon"
        />
            {/* Google Tag Manager */}
            <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-N8PCZB8K'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N8PCZB8K');
            `,
          }}
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Flaticon */}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />

              {/* JSON-LD pour le SEO */}
              <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Digital Works - Agence Web & SEO",
              "url": "https://digital-works.org",
              "description":
                "Agence web experte en création de sites internet et SEO à Franconville, Les Herbiers et Cholet.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://digital-works.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        
      </Head>
      
      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
      
    </Fragment>
  );
}

'use client'
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import React, { useState } from 'react';  


const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      phone_number: e.target.phone_number.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    //envoi les data au serveur
    const options = {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if(response.status === 200){
      console.log('message envoye');
      setEmailSubmitted(true);
    }
  };

  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Contact"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contactez-nous </span>
                      <h2>Passez à l’action, on s’occupe du reste</h2>
                      <p>Vous avez une question, un besoin spécifique ou une idée à concrétiser ? <br /> On est là pour vous accompagner à chaque étape. Contactez-nous et donnons vie ensemble à votre projet digital </p>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Franconville</h5>
                      <a className="mailto" href="mailto:digitalworks@gmail.com">
                        digitalworks@gmail.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +33....
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Les Epesses</h5>
                      
                      <a className="mailto" href="mailto:digitalworks@gmail.com">
                        digitalworks@gmail.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +33 ...
                      </a>
                    </div>
                  </div>
                </div>
                {/* <h4>Nos réseaux sociaux</h4>
                <div className="social-style-two pt-15">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Dites-nous tout</span>
                  <h3>Posez-nous vos questions</h3>
                </div>
                <form
                  id="contactForm"
                  className="contactForm"
                  onSubmit={handleSubmit}
                  name="contactForm"
                  method="post"
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue={""}
                          placeholder="Nom"
                          required
                          data-error="Renseignez votre nom"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue={""}
                          placeholder="Téléphone"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue={""}
                          placeholder="Email"
                          required
                          data-error="Please enter your Email Address"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                         Envoyer votre message <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
  {/*     <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div> */}
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;

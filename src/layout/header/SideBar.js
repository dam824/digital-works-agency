'use client'
import { Fragment } from "react";
import React, { useState } from 'react';


const SideBar = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);


      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };
      
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
        const resData = await response.json();
        if (response.status === 200) {
          console.log("Message envoyé :", resData);
          setEmailSubmitted(true);
        } else {
          throw new Error(resData.error || "Erreur inconnue");
        }
      } catch (error) {
        console.error("Erreur d'envoi :", error);
        setError("Impossible d'envoyer votre message. Réessayez plus tard.");
      } finally {
        setLoading(false);
        document
        .querySelector("body")
        .classList.remove("side-content-visible");
      }


    };
  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Contactez-nous</h4>
          </div>
          {/*Form*/}
          <div className="appointment-form">
            {!emailSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Nom" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Adresse Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Message" rows={5} required />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                  <button type="submit" className="theme-btn" disabled={loading}>
                    {loading ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </div>
              </form>
            ) : (
              <p className="success-message">✅ Merci ! Votre message a bien été envoyé.</p>
            )}
          </div>
          {/*Social Icons*/}
         {/*  <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div> */}
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;

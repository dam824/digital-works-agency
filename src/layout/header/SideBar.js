'use client'
import { Fragment } from "react";
import React, { useState } from 'react';


const SideBar = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
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
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
            
              onSubmit={(e) => {
                handleSubmit(e)
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Nom" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Adresse Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" rows={5} required />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Envoyer
                </button>
              </div>
            </form>
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

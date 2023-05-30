import React from "react";
import "./contact.scss";

import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="about_header">
        <div className="container">
          <div className="about_header--content">
            <div className="location">
              <NavLink to="/">Əsas</NavLink> / <span>Əlaqə</span>
            </div>
            <h2>Haqqımızda</h2>
          </div>
        </div>
      </div>

      <div className="contact_main">
        <div className="container">
          <div className="contact_main--content">
            <div className="contact_main--left">
              <h3>Əlaqə məlumatları</h3>
              <p>Mümkün olduğu qədər tez sizə cavab verəcəyik</p>
              <div className="boxes">
                <div className="contact_main--left__box">
                  <div className="contact_main--logo"><i className="fa-solid fa-phone"></i></div>
                  <p>Telefon</p>
                  <span>+(994) 55 555 55 55</span>
                  <span>+(994) 77 777 77 77</span>
                </div>
                <div className="contact_main--left__box">
                  <div className="contact_main--logo"><i className="fa-solid fa-envelope"></i></div>
                  <p>Email</p>
                  <span>admin@admin.com</span>
                  <span>admin@admin.com</span>
                </div>
              </div>
              <div className="contact_main--left__address">
                <div className="address_header">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <p>Ünvan</p>
                </div>
                <p>
                  4517 Washington Ave. Manchester, Road 2342, Kentucky 39495
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1754749516713!2d49.821860115648214!3d40.38280336562567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1saz!2saz!4v1680762154025!5m2!1saz!2saz"
                  height="250"
                  style={{ border: 0, width: "100%"}}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="contact_main--form">
              <h4>Mesaj burax</h4>
              <form>
                <label htmlFor="name">Adınız*</label>
                <input placeholder="Akif" type="text" id="name" />
                <label htmlFor="email">Emailiniz*</label>
                <input placeholder="numune@gmail.com" type="email" id="email" />
                <label htmlFor="subject">Mövzu*</label>
                <input
                  placeholder="Mövzunu qeyd edin"
                  type="text"
                  id="subject"
                />
                <label htmlFor="message">Mesajınız*</label>
                <textarea
                  placeholder="Mesajınızı bura yazın"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">İndi Göndər</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

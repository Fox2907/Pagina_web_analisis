import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
    return (
        
      <div className="footer-container">
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="footer-content">
          <div>Contacto:</div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>correo@example.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>123-456-7890</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarker} />
            <span>Dirección de ejemplo</span>
          </div>
        </div>
        <div className="additional-column">
            <img src="public\images\LogoEmi.png" alt="Descripción de la imagen" />
        </div>
        
        <div className="derechos-reservados">
            Derechos Reservados &copy; {new Date().getFullYear()}
        </div>
      </div>
    );
  }
  

export default Footer;

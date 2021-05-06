import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="column">
        <h1>About Us</h1>
        <div className="icons">
          <a className="icon" href="https://www.linkedin.com/in/allan-caplain-79019a159/">
            <p className="fa-fa-linkedin">
              Allan Caplain
            </p>
          </a>
          <a className="icon" href="https://www.linkedin.com/in/bastien-le-brun-3417b4137/">
            <p className="fa-fa-linkedin">
              Bastien Le Brun
            </p>
          </a>
          <a className="icon" href="https://www.linkedin.com/in/calvinhyacinthmsc/">
            <p className="fa-fa-linkedin">
              Calvin Hyacinth
            </p>
          </a>
          <a className="icon" href="https://www.linkedin.com/in/c%C3%A9dric-guyot-17231b209/">
            <p className="fa-fa-linkedin">
              Cédric Guyot
            </p>
          </a>
          <a className="icon" href="https://www.linkedin.com/in/cyril-david-928403176/">
            <p className="fa-fa-linkedin">
              Cyril David
            </p>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

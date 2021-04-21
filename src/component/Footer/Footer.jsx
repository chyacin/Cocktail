import React, { useState } from 'react';
import ReactStars from 'react-stars';
import './Footer.css';

const Footer = () => {
  const [rating, setRating] = useState(0);

  return (
    <footer className="footer">
      <div className="row">
        <div className="column">
          <h1>Rate Us</h1>
          <ReactStars
            fractions={2}
            emptySymbol="fa fa-star-o fa-2x star"
            fullSymbol="fa fa-star fa-2x star"
            initialRating={rating}
            onClick={(rate) => setRating(rate)}
          />
        </div>
        <div className="column">
          <h1>About Us</h1>
          <div className="dropdown">
            <h5 type="button">L&apos;Equipe</h5>
            <div className="dropdown-content">
              <h4><a href="https://www.linkedin.com/in/allan-caplain-79019a159/" target="_blank" rel="noreferrer">Allan Caplain</a></h4>
              <h4><a href="https://www.linkedin.com/in/bastien-le-brun-3417b4137/" target="_blank" rel="noreferrer">Bastian Le Brun</a></h4>
              <h4><a href="https://www.linkedin.com/in/calvinhyacinthmsc/" target="_blank" rel="noreferrer">Calvin Hyacinth</a></h4>
              <h4><a href="https://www.linkedin.com/in/c%C3%A9dric-guyot-17231b209/" target="_blank" rel="noreferrer">Cédric Guyot</a></h4>
              <h4><a href="https://www.linkedin.com/in/cyril-david-928403176/" target="_blank" rel="noreferrer">Cyril David</a></h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

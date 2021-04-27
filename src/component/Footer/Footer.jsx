import React, { useState } from 'react';
import ReactStars from 'react-stars';
import './Footer.css';
import { AiOutlineTeam } from 'react-icons/ai';

const Footer = () => {
  const [rating, setRating] = useState(0);

  return (
    <footer className="footer">
      <div className="row">
        <div className="column">
          <h1>Rate Us</h1>
          <ReactStars
            size={50}
            fractions={2}
            emptySymbol="fa fa-star-o fa-2x star"
            fullSymbol="fa fa-star fa-2x star"
            initialRating={rating}
            onClick={(rate) => setRating(rate)}
          />
        </div>
        <div className="column">
          <h1>About Us</h1>
          <AiOutlineTeam
            size={50}
            linkedin="Calvin"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

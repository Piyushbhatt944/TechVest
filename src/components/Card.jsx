import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, icon, link }) {
  return (
    <div className="glass-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <Link to={link} className="card-link">
        Learn more
      </Link>
    </div>
  );
}

export default Card;

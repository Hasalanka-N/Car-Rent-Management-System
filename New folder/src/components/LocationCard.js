import React from 'react';
import '../styles/LocationCard.css';

function LocationCard({ title, image, onClick }) {
  return (
    <div
      className="location-card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="location-label">
        <span>{title}</span>
        <div className="arrow">→</div>
      </div>
    </div>
  );
}

export default LocationCard;

import React from 'react';
import '../styles/MyBookingCard.css'; // Renamed CSS file

const MyBookingCard = () => {
  return (
    <div className="my-booking-card">
      <div className="card-left">
        <img src="car-image.png" alt="Chevrolet Spark" className="car-img" />
      </div>

      <div className="card-middle">
        <div className="car-info">
          <h3 className="car-name">Chevrolet Spark</h3>
          <p className="company-name">Car Rental 8</p>
        </div>

        <div className="features-row">
          <span className="feature-tag">Automatic</span>
          <span className="feature-tag">A/C</span>
          <span className="feature-tag">4 Seats</span>
          <span className="feature-tag">1 Bag</span>
        </div>

        <div className="location-info">
          <span className="location-pin">📍</span>
          <span>Kailua-Kona, HI — 11.97 km away</span>
        </div>

        <p className="offer-text">🔥 Pay Now Special Offer</p>
      </div>

      <div className="card-right">
        <div className="price-details">
          <p className="price-day">৳ 8,710<span className="per-day">/day</span></p>
          <p className="total-price">৳ 60,000.84 <span className="total-label">total</span></p>
        </div>
        <button className="view-btn">View</button>
      </div>
    </div>
  );
};

export default MyBookingCard;

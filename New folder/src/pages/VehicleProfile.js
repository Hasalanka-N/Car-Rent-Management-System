import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assest/FA 6.4.0 Pro/css/all.min.css";
import "../styles/VehicleProfile.css";
import Navbar from "../components/NavBar.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faCarSide,
  faMapMarkerAlt,
  faMoneyBillWave,
  faCalendarAlt,
  faGasPump,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

function VehicleProfile() {
  const [isLoggedIn] = useState(true);
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState(""); // State for the large image
  const location = useLocation();

  useEffect(() => {
    const vehicleData = location.state?.vehicle;
    if (vehicleData) {
      setVehicleDetails(vehicleData);
      setSelectedImage(vehicleData.image); // Set initial image to the main vehicle image
    }
  }, [location.state]);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // Update the large image when a small image is clicked
  };

  return (
    <div className="vehicle-profile-container">
      <Navbar isLoggedIn={isLoggedIn} />

      <main className="vehicle-details-section">
        <div className="vehicle-image">
          <img src={selectedImage} alt={vehicleDetails.model} /> {/* Display the selected image */}
          <div className="vehicle-image-gallery">
            {vehicleDetails.images && vehicleDetails.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${vehicleDetails.model} ${index + 1}`}
                onClick={() => handleImageClick(imgSrc)} // Click event to change the large image
                className="gallery-image"
              />
            ))}
          </div>
        </div>

        <div className="vehicle-info">
          <h1>{vehicleDetails.model}</h1>

          <div className="price">
            <span>RS {vehicleDetails.dayPrice}</span> / day
          </div>

          <ul className="details-list">
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 100 km for 1 day</li>
            <li><FontAwesomeIcon icon={faMoneyBillWave} className="icon" /> Deposit: No deposit needed</li>
            <li><FontAwesomeIcon icon={faMoneyBillWave} className="icon" /> Payment: Cash, Credit/debit cards</li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Location: {vehicleDetails.location}</li>
            <li><FontAwesomeIcon icon={faGasPump} className="icon" /> {vehicleDetails.fuelConsumption}</li>
            <li><FontAwesomeIcon icon={faCogs} className="icon" /> {vehicleDetails.transmission}</li>
          </ul>

          <div className="rental-options">
            <h2>Book Your Rental</h2>
            <div className="date-picker-group">
              <div className="date-picker-item">
                <label>
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  Pickup Date:
                </label>
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select pickup date"
                />
              </div>
              <div className="date-picker-item">
                <label>
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  Drop-off Date:
                </label>
                <DatePicker
                  selected={dropoffDate}
                  onChange={(date) => setDropoffDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select drop-off date"
                />
              </div>
            </div>
            <button
              className="book-now-button"
              disabled={!pickupDate || !dropoffDate}
            >
              Book Now
            </button>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-top" id="footer-top">
          <div className="footer-left">
            <h1 className="footer-name">Rapid Rides Rentals</h1>
          </div>
          <div className="footer-right">
            <h2 style={{ color: "#D3D3D3" }}>Daily from 09:00 - 21:00</h2>
            <p><strong>Email:</strong> contact@rapidrides.com</p>
            <p><strong>Phone:</strong> +94 77 123 4567</p>
            <p><strong>Address:</strong> 123 Main Street, Colombo, Sri Lanka</p>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </footer>
    </div>
  );
}

export default VehicleProfile;

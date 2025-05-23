import React from "react";
import "../styles/VehicleCard.css";
import { Link } from "react-router-dom";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faCogs, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function VehicleCard({ vehicle }) { 
  return (
    <Link to="/VehicleProfile" state={{ vehicle }} className="vehicle-card-link">
      <div className="vehicle_main">
        <div className="vehiclecard-top">
          <h4>{vehicle.model}</h4>
          <p className="type">{vehicle.type}</p>
        </div>
        <div className="vehiclecard-image">
          <img src={vehicle.image} alt={vehicle.model} className="vehicle-image" />
        </div>
        <div className="vehiclecard-data">
          <div className="fuel">
            <p><FontAwesomeIcon icon={faGasPump} /> {vehicle.fuelConsumption}</p>   
          </div>
          <div className="Transmission">
            <p><FontAwesomeIcon icon={faCogs} /> {vehicle.transmission}</p>
          </div>
          <div className="Capacity">
            <p><FontAwesomeIcon icon={faUserGroup} /> {vehicle.capacity} Seats</p>
          </div>
        </div>
        <div className="vehiclecard-bottom">
          <p><strong>Price:</strong> RS : {vehicle.dayPrice} </p><p className="day">/ Day</p>
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;

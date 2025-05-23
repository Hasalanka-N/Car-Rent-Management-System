import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMoneyBillWave,
  faCheckCircle,
  faTimesCircle,
  faHourglassHalf,
  faCogs,
  faUserGroup,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/BookingCard.css";

function BookingCard({ booking }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <FontAwesomeIcon icon={faCheckCircle} className="status-icon completed" />;
      case "Ongoing":
        return <FontAwesomeIcon icon={faHourglassHalf} className="status-icon ongoing" />;
      case "Cancelled":
        return <FontAwesomeIcon icon={faTimesCircle} className="status-icon cancelled" />;
      default:
        return null;
    }
  };

  return (
    <div className="booking-card">
        <div
        className="booking-card"
        style={{
            backgroundImage: `url(${booking.vehicleImage || '/default-image.jpg'})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            height: "200px",
            width:"300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0",
            marginLeft: "-10px",
            borderRadius:"10px 0 0 10px"
        }}
        >
            <div className="car-name">
                <h3 className="vehicle-model">{booking.vehicleModel}</h3>
            </div>
        {/* <img src={booking.vehicleImage} alt={booking.vehicleModel} className="vehicle-image" />
        <h3 className="vehicle-model">{booking.vehicleModel}</h3> */}
      </div>

      <div className="booking-card-section middle">
        <div className="booking-info">
          <div className="date-info">
            <div>
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <strong>Pickup:</strong>
              <p>{booking.pickupDate}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <strong>Dropoff:</strong>
              <p>{booking.dropoffDate}</p>
            </div>
            </div>
            <div className="booking-info-car-info">
              <div>
                <p><FontAwesomeIcon icon={faCogs} /> {booking.transmission}</p>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faUserGroup} />  {booking.passengerCapacity}</p>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faCar} /> {booking.vehicleColor}</p>
              </div> 
          </div>
          {/* <div>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <strong>Pickup:</strong>
            <p>{booking.pickupDate}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <strong>Dropoff:</strong>
            <p>{booking.dropoffDate}</p>
          </div>
          
          <div>
            <strong>Transmission:</strong>
            <p>{booking.transmission}</p>
          </div>
          <div>
            <strong>Passenger Capacity:</strong>
            <p>{booking.passengerCapacity}</p>
          </div>
          <div>
            <strong>Vehicle Color:</strong>
            <p>{booking.vehicleColor}</p>
          </div> */}
        </div>
      </div>

      <div className="booking-card-section right">
        <div className="total-price">
          {/* <FontAwesomeIcon icon={faMoneyBillWave} className="icon" /> */}
          <strong>RS {booking.totalPrice}</strong>
        </div>
        <div className="booking-status">
          {getStatusIcon(booking.status)}
          <span className={`status-text ${booking.status.toLowerCase()}`}>
            {booking.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;

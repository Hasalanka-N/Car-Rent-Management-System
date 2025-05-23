import React from "react";
import '../styles/NotificationCard.css';
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCalendarCheck, FaCreditCard, FaUndo, FaTags, FaBell, FaCheckCircle } from "react-icons/fa";

function NotificationCard({ type, title, description, date, color, onClick  }){

    const getNotificationIcon = (type) => {
        if (type === "Booking Confirmed") {
            return <FaCalendarCheck color="green" size={20} />;
        } else if (type === "Payment Reminder") {
            return <FaCreditCard color="blue" size={20} />;
        } else if (type === "Return Reminder") {
            return <FaUndo color="orange" size={20} />;
        } else if (type === "Discount Offer") {
            return <FaTags color="purple" size={20} />;
        }else if (type === "Booking Closed") {
            return <FaCheckCircle color="green" size={20} />;
        } else {
            return <FaBell color="gray" size={20} />;  
        }
    };

    return(
        <div className="notification-item" onClick={onClick}>
        <div className="notification-icon">
            <div className="notifi-icon-bg">
                {getNotificationIcon(type)} 
            </div>
        </div>
        <div className="notification-content">
            <div className="notification-title">{title}</div>
            <div className="notification-description">{description}</div>
        </div>
        <div className="notification-date">{date}</div>
        <span className="red-dot" style={{ backgroundColor: color}}></span>
    </div>
    );
}
export default NotificationCard;
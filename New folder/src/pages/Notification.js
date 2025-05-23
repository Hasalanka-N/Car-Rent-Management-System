import React, { useState } from "react";
import "../styles/Notification.css";
import Navbar from "../components/NavBar";
import { FaBell } from "react-icons/fa";
import NotificationCard from "../components/NotificationCard";

function Notification() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    { id: 1, type: "Booking Confirmed", title: "Booking Confirmed", description: "Your car rental is confirmed.", date: "2024-03-16", status: "notread" },
    { id: 2, type: "Payment Reminder", title: "Payment Due", description: "Your payment is due tomorrow.", date: "2024-03-17", status: "read" },
    { id: 3, type: "Return Reminder", title: "Return Car", description: "Please return your car by 5 PM.", date: "2024-03-16", status: "read" },
    { id: 4, type: "Discount Offer", title: "Special Offer!", description: "Get 20% off your next rental!", date: "2024-03-14", status: "read" }
  ];

  return (
    <div className="notification">
      <div className="notifi-nav">
        <Navbar isLoggedIn={isLoggedIn} />
      </div>
      <div className="notifi-container">
        <div className="notifi-left">
          <h3>Notifications <FaBell className="notification_icon cursor-pointer" /></h3>
          <div className="notifi-list">
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                type={notification.type}
                title={notification.title}
                description={notification.description}
                date={notification.date}
                color={notification.status === "notread" ? "#FF0000" : "white"}
                onClick={() => setSelectedNotification(notification)}
              />
            ))}
          </div>
        </div>

        <div className={`notifi-right ${selectedNotification ? "expanded" : ""}`}>
          {selectedNotification ? (
            <div className="notifi-detail">
              <h2>{selectedNotification.title}</h2>
              <p><strong>Type:</strong> {selectedNotification.type}</p>
              <p><strong>Description:</strong> {selectedNotification.description}</p>
              <p><strong>Date:</strong> {selectedNotification.date}</p>
              <button className="close-btn" onClick={() => setSelectedNotification(null)}>Close</button>
            </div>
          ) : <p>Select a notification to view details</p>}
        </div>
      </div>
    </div>
  );
}

export default Notification;

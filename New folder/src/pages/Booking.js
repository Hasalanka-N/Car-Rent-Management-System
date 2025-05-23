import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import BookingCard from "../components/BookingCard";
import "../styles/BookingHistory.css";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchedBookings = [
      {
        id: 1,
        vehicleModel: "Toyota Prius",
        vehicleImage: "/image/vehicles/prius.jpg",
        pickupDate: "2025-04-15",
        dropoffDate: "2025-04-18",
        status: "Completed",
        totalPrice: 3000.00,
        transmission: "Automatic", // New data field
        passengerCapacity: 5, // New data field
        vehicleColor: "Blue", // Another data field
      },
      {
        id: 2,
        vehicleModel: "Honda Civic",
        vehicleImage: "/image/vehicles/civic.jpg",
        pickupDate: "2025-04-22",
        dropoffDate: "2025-04-25",
        status: "Ongoing",
        totalPrice: 2500.00,
        transmission: "Manual",
        passengerCapacity: 5,
        vehicleColor: "Red",
      },
      {
        id: 3,
        vehicleModel: "BMW X5",
        vehicleImage: "image/vehicles/bmw-x5.jpg",
        pickupDate: "2025-03-10",
        dropoffDate: "2025-03-14",
        status: "Cancelled",
        totalPrice: 4000.00,
        transmission: "Automatic",
        passengerCapacity: 7,
        vehicleColor: "Black",
      },
    ];
    
    setBookings(fetchedBookings);
  }, []);

  const handleStatusFilter = (status) => {
    setFilteredStatus(status);
  };

  const clearFilters = () => {
    setFilteredStatus("All");
    setStartDate("");
    setEndDate("");
  };

  const filteredBookings = bookings.filter((booking) => {
    const isStatusMatch =
      filteredStatus === "All" || booking.status === filteredStatus;

    const isDateInRange =
      (startDate === "" || new Date(booking.pickupDate) >= new Date(startDate)) &&
      (endDate === "" || new Date(booking.dropoffDate) <= new Date(endDate));

    return isStatusMatch && isDateInRange;
  });

  return (
    <div className="booking-history-container">
      <Navbar isLoggedIn={true} />
      <div className="booking-history-content">
        <div className="booking-filter">
          <h3>Filter by Status</h3>
          <button
            className={filteredStatus === "All" ? "active" : ""}
            onClick={() => handleStatusFilter("All")}
          >
            All
          </button>
          <button
            className={filteredStatus === "Completed" ? "active" : ""}
            onClick={() => handleStatusFilter("Completed")}
          >
            Completed
          </button>
          <button
            className={filteredStatus === "Ongoing" ? "active" : ""}
            onClick={() => handleStatusFilter("Ongoing")}
          >
            Ongoing
          </button>
          <button
            className={filteredStatus === "Cancelled" ? "active" : ""}
            onClick={() => handleStatusFilter("Cancelled")}
          >
            Cancelled
          </button>

          <h3>Filter by Date</h3>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="End Date"
          />

          <button className="clear-button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        <div className="booking-list-area">
          <h2 className="booking-heading">My Bookings</h2>
          {filteredBookings.length === 0 ? (
            <p className="no-booking">No bookings found.</p>
          ) : (
            <div className="booking-list">
              {filteredBookings.map((booking, index) => (
                <div style={{ "--i": index }} key={booking.id}>
                  <BookingCard booking={booking} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingHistory;

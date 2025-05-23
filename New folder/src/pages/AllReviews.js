import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "..style/AllReviews.css";
import '../styles/AllReviews.css';
import ReviewCard from "../components/ReviewCard";
import Navbar from "../components/NavBar";

function AllReviews() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const reviews = [
    {
      id: 1,
      name: "Sachini Anjalika",
      rating: 5,
      comment: "Excellent service! Highly recommended.",
      date: "March 10, 2025",
    },
    {
      id: 2,
      name: "Hewa Pathirana",
      rating: 4.5,
      comment: "Good experience, but could be improved.",
      date: "March 8, 2025",
    },
    {
      id: 3,
      name: "Thisara Perera",
      rating: 4,
      comment: "Nice vehicles, but pricing is a bit high.",
      date: "March 5, 2025",
    },
  ];

  return (
    <div className="all-reviews-container">
      <Navbar isLoggedIn={isLoggedIn}/>
      <header className="all-reviews-header">
        <h1>All Reviews</h1>
      </header>
      <p>Here you can display a list of all reviews.</p>

      {reviews.map((review) => (
              <ReviewCard
              review={review}
              />
            ))}

      <Link to="/" className="go-back-link">Go Back</Link>
    </div>
  );
}

export default AllReviews;

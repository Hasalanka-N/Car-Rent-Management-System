import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; 
import "../styles/ReviewCard.css";

function ReviewCard({ review }) {
  const navigate = useNavigate();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star full-star" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star half-star" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} className="star empty-star" />);
      }
    }
    return stars;
  };

    // Navigate to another page on click
    const handleCardClick = () => {
      navigate("/AllReviews");
    };

  return (
    <div className="review-card"  onClick={handleCardClick}>
      <div className="review-header">
        <h3>{review.name}</h3>
        <div className="stars">{renderStars(review.rating)}</div>
      </div>
      <p className="review-text">"{review.comment}"</p>
      <p className="review-date">{review.date}</p>
    </div>
  );
}

export default ReviewCard;

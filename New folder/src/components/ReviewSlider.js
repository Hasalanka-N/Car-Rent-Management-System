import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard"; // Import ReviewCard component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/CustomerReviews.css"; // Custom styles for slider

function CustomerReviews({ reviews = [] }) { 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="cus-review">
        <Slider {...settings}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default CustomerReviews;

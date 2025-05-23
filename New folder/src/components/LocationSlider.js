import React from "react";
import Slider from "react-slick";
import LocationCard from "./LocationCard"; // Make sure to import your LocationCard component

function LocationSlider({ locations = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="location-slider">
      <h2>Popular Locations</h2>
      <div className="location-slider-wrapper">
        <Slider {...settings}>
          {locations.length > 0 ? (
            locations.map((location) => (
              <LocationCard key={location.id} title={location.title} image={location.image} />
            ))
          ) : (
            <p>No locations available</p>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default LocationSlider;

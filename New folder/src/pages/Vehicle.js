import React, { useState } from "react";
import "../styles/Vehicle.css";
import Navbar from "../components/NavBar";
import VehicleCard from "../components/VehicleCard";
import "../assest/FA 6.4.0 Pro/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"; 


function Vehicle() {
  const [priceRange, setPriceRange] = useState([0, 40000]); 

  const vehicles = [
    { id: 1, model: "Toyota Prius", type: "Hybrid Sedan", image: "/image/vehicles/prius.jpg", fuelConsumption: "10.5L/100km", dayPrice: 12000, transmission: "Automatic", },
    { id: 2, model: "Honda Civic", type: "Sedan", image: "/image/vehicles/civic.jpg", fuelConsumption: "10.5L/100km", dayPrice: 19000, transmission: "Automatic", },
    { id: 3, model: "BMW X5", type: "SUV", image: "/image/vehicles/bmw-x5.jpg", fuelConsumption: "10.5L/100km", dayPrice: 25000, transmission: "Automatic", },
    { id: 4, model: "Ford Mustang", type: "Sports Car", image: "/image/vehicles/mustang.jpg", fuelConsumption: "10.5L/100km", dayPrice: 30000, transmission: "Automatic", },
    { id: 5, model: "Tesla Model S", type: "Electric Sedan", image: "/image/vehicles/tesla.jpg", fuelConsumption: "10.5L/100km", dayPrice: 27000, transmission: "Automatic", },
    { id: 6, model: "Jeep Wrangler", type: "Off-Road SUV", image: "/image/vehicles/jeep.jpg", fuelConsumption: "10.5L/100km", dayPrice: 22000, transmission: "Automatic", },
    {id: 7, model: "Toyota Prius", image: "/image/vehicles/prius.jpg", fuelConsumption: "4.5L/100km", transmission: "Automatic", capacity: 5, dayPrice: 10000.0,type: "Hybrid Sedan",},
    {id: 8,model: "Honda Civic", image: "/image/vehicles/civic.jpg", fuelConsumption: "5.2L/100km", transmission: "Manual", capacity: 5, dayPrice: 11000.0,type: "Sedan",},
    {id: 9,model: "BMW X5", image: "/image/vehicles/bmw-x5.jpg", fuelConsumption: "8.5L/100km", transmission: "Automatic", capacity: 7, dayPrice: 18500,type: "SUV",},
  ];

  const vehicleTypeCounts = vehicles.reduce((acc, vehicle) => {
    acc[vehicle.type] = (acc[vehicle.type] || 0) + 1;
    return acc;
  }, {});

  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleFilterChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleMinPriceChange = (e) => {
    setPriceRange([parseInt(e.target.value), priceRange[1]]);
  };

  const handleMaxPriceChange = (e) => {
    setPriceRange([priceRange[0], parseInt(e.target.value)]);
  };

  const filteredVehicles = vehicles.filter(
    (v) =>
      (selectedTypes.length === 0 || selectedTypes.includes(v.type)) &&
      v.dayPrice >= priceRange[0] &&
      v.dayPrice <= priceRange[1]
  );

  return (
    <div className="Vehicle">
      <div className="vehicle-nav">
        <Navbar />
      </div>
      <div className="vehicle-main">
        <div className="vehicle-left">
          <div className="filter-vehicle">
          <h3>Search Vehicle</h3>

          <div class="search-container">
            <input type="text" class="search-input" placeholder="Search..." />
            <i class="fa fa-search search-icon"></i>
          </div>


            <h3>Type</h3>
            {Object.entries(vehicleTypeCounts).map(([type, count]) => (
              <label key={type} style={{ display: "block", textAlign: "left", marginBottom: "10px", fontSize:"12px" }}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleFilterChange(type)}
                />
                {type} <span style={{ color: "darkgray" }}>({count})</span>
              </label>
            ))}

            <h3>Price Range</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginLeft:"-0px", fontSize:"12px" }}>
              <label>
                Min Price: Rs. {priceRange[0]}<br></br>
                <input
                  type="range"
                  min="0"
                  max="40000"
                  step="1000"
                  value={priceRange[0]}
                  onChange={handleMinPriceChange}
                  style={{ width: "100%" }}
                />
              </label>
              <label>
                Max Price: Rs. {priceRange[1]}<br></br>
                <input
                  type="range"
                  min="0"
                  max="40000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={handleMaxPriceChange}
                  style={{ width: "100%" }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="vehicle-right">
          {/* <div className="v-searchbar">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 w-full rounded"
          />
          </div> */}
          <div className="vehicle-list">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)
            ) : (
              <p>No vehicles found within this price range.</p>
            )}
          </div>
        </div>
      </div>
            <footer>
                    <div className="footer-top">
                      <div className="footer-left">
                        <h1 className="footer-name">Rapid Rides Rentals</h1>
                      </div>
                      <div className="footer-right">
                        <h2 style={{ color: "#D3D3D3" }}>
                          Daily from 09:00 - 21:00
                        </h2>
                        <p>
                          <strong>Email:</strong> contact@rapidrides.com
                        </p>
                        <p>
                          <strong>Phone:</strong> +94 77 123 4567
                        </p>
                        <p>
                          <strong>Address:</strong> 123 Main Street, Colombo, Sri Lanka
                        </p>
                      </div>
                    </div>
                    <div className="footer-bottom">
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </footer>
    </div>
  );
}

export default Vehicle;

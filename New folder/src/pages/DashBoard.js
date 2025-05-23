import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assest/FA 6.4.0 Pro/css/all.min.css";
import "../styles/Dashboard.css";
import Navbar from "../components/NavBar.js";
import VehicleCard from "../components/VehicleCard.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ReviewCard from "../components/ReviewCard.js";
import MissonCard from "../components/MissonCard.js";
import { faCar, faCarSide , faAward, faFileContract, faUserTie, faChevronRight } from "@fortawesome/free-solid-svg-icons"; 
import LocationCard from "../components/LocationCard.js";
import SriLankaMap from "../components/SrilankaMap.js";
import WhyUsItem from "../components/WhyUs.js";
import VehicleSlider from "../components/VehicleSlider.js";

import { 
  faHandHoldingDollar, 
  faMedal, 
  faBrain, 
  faHeartCircleCheck, 
  faBusinessTime, 
  faClipboardCheck, 
  faSeedling, 
  faTruckFast, 
  faGifts 
} from "@fortawesome/free-solid-svg-icons";




import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function DashBoard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [locatin, setLocation] = useState("Dubai");
  const navigate = useNavigate();

  const sectionsRef = useRef([]);


  const whyUsItems = [
    { icon: faHandHoldingDollar, title: "Affordable Prices" },
    { icon: faAward, title: "Award Winning Service" },
    { icon: faUserTie, title: "Professional Team" },
    { icon: faMedal, title: "Top Rated Cars" },
    { icon: faBrain, title: "Smart Choices" },
    { icon: faHeartCircleCheck, title: "Customer Satisfaction" },
    { icon: faBusinessTime, title: "Business Solutions" },
    { icon: faClipboardCheck, title: "Easy Documentation" },
    { icon: faSeedling, title: "Eco-Friendly Options" },
    // { icon: faGifts, title: "Special Offers" },
  ];

  const vehicles = [
    {
      id: 1,
      model: "Toyota Prius",
      image: "/image/vehicles/prius.jpg",
      fuelConsumption: "4.5L/100km",
      transmission: "Automatic",
      capacity: 5,
      dayPrice: 10000.0,
      type: "Hybrid Sedan",
    },
    {
      id: 2,
      model: "Honda Civic",
      image: "/image/vehicles/civic.jpg",
      fuelConsumption: "5.2L/100km",
      transmission: "Manual",
      capacity: 5,
      dayPrice: 11000.0,
      type: "Sedan",
    },
    {
      id: 3,
      model: "BMW X5",
      image: "/image/vehicles/bmw-x5.jpg",
      images: [
        "/image/vehicles/bmw-x5.jpg",
        "/image/vehicles/mustang.jpg",
        "/image/vehicles/bmw-x5.jpg"
      ],
      fuelConsumption: "8.5L/100km",
      transmission: "Automatic",
      capacity: 7,
      dayPrice: 18500,
      type: "SUV",
    },
    {
      id: 4,
      model: "Ford Mustang",
      image: "/image/vehicles/mustang.jpg",
      fuelConsumption: "9.0L/100km",
      transmission: "Automatic",
      capacity: 4,
      dayPrice: 18500.0,
      type: "Sports Car",
    },
    {
      id: 5,
      model: "Tesla Model S",
      image: "/image/vehicles/tesla.jpg",
      fuelConsumption: "Electric",
      transmission: "Automatic",
      capacity: 5,
      dayPrice: 20000.0,
      type: "Electric Sedan",
    },
    {
      id: 6,
      model: "Jeep Wrangler",
      image: "/image/vehicles/jeep.jpg",
      fuelConsumption: "10.5L/100km",
      transmission: "Manual",
      capacity: 5,
      dayPrice: 19000.0,
      type: "Off-Road SUV",
    },
  ];

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

  const locations = [
    { title: 'GALLE', image: '/image/galle.jpg' },
    { title: 'COLOMBO', image: '/image/colombo.jpg' },
    { title: 'SIGIRIYA', image: '/image/sigiriya.jpg' },
    { title: 'TRINCOMALEE', image: '/image/trincomalee.jpg' },
  ];

  const popularCategories = [
    "Luxury", "Economy", "Sports", "SUV", 
    "Convertible", "Business", "Electric (EV)", "Van"
  ];

  const quickLinks = [
    { title: "Rent a car", subtitle: "" },
    { title: "Special Offers", subtitle: "" },
    { title: "Locations / Branches", subtitle: "" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search", { state: { searchQuery, location } });
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          element.setAttribute("tabindex", "-1");
          element.focus({ preventScroll: true });
        }, 100); 
      }
    }
  }, [location]);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        }
      });
    }, options);
  
    if (sectionsRef.current.length > 0) {
      sectionsRef.current.forEach((section) => {
        if (section) observer.observe(section);
      });
    }
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="dashboard-container">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="dashboard-search">
        {/* <div className="dashboard-name">
          <h1 className="com-name">Rapid Rides Rentals</h1>
        </div> */}
        {/* <div className="search-box">
          <select className="vehicle-dropdown">
            <option value="" disabled selected>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="van">Van</option>
            <option value="truck">Truck</option>
          </select>

          <div className="datepicker">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select Pickup Date"
            />

            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select Return Date"
            />
          </div> */}
        {/* </div> */}

        <div className="hero-content">
          <h1 className="com-name">Rapid Rides Rentals</h1>
          <h2>Find a car of your dream in 60 seconds</h2>
          
          
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-group">
              <div className="searchbar">
              <input
                type="text"
                placeholder="Search a car by brand or model"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            <select className="vehicle-dropdown">
            <option value="" disabled selected>
              City
            </option>
            <option value="Colombo">Colombo</option>
            <option value="Galle">Galle</option>
            <option value="Kandy">Kandy</option>
            <option value="Negambo">Negambo</option>
          </select>
          </div>
              <button type="submit" className="search-button">SEARCH</button>
            </div>
          </form>
        </div>
        <section className="quick-links-section">
        <div className="quick-links">
          {quickLinks.map((link, index) => (
            <div key={index} className="quick-link-item">
              <h3>{link.title}</h3>
              {link.subtitle && <p>{link.subtitle}</p>}
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            </div>
          ))}
        </div>
      </section>

          

      </div>

      {/* <section className="categories-section">
        <div className="category-grid">
          {popularCategories.map((category, index) => (
            <div key={index} className="category-item">
              {category}
            </div>
          ))}
        </div>
      </section> */}


      <div className="misson" ref={(el) => (sectionsRef.current[0] = el)}>
      <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>We Are Dedicated Provide Quality Service</h2>
        <div className="main-misson">
          <div className="misson-left">
            
          </div>
          <div className="misson-right">
          <div className="misson-l-l">
              <div className="misson-l-top">
                <MissonCard title="Wide Selection Of Vehicles" description="New and used cars of various brands and models for any budget" color="#2C2D2D" icon={faCarSide } fcolor="#ffffff" />
              </div>
              <div className="misson-l-bottom">
                <MissonCard title="Quality Assuranse" description="Verified cars with a full history and technical inspection" color="#e5e5e5" icon={faAward}/>
              </div>
          </div>
            <div className="misson-l-r">
              <div className="misson-r-top">
              <MissonCard title="Transparent Purchasing Terms" description="No hidden fees, fair pricing and a complete set of documents" color="#e5e5e5" icon={faFileContract} />
              </div>
              <div className="misson-r-bottom">
              <MissonCard title="Personalized Approch" description="Professional advice and assisten in choosing the perfect car for your needs" color="#e5e5e5" icon={faUserTie}/>
              </div>
          </div>
          </div>
        </div>

      </div>

      <div className="vehicles" ref={(el) => (sectionsRef.current[1] = el)}>
      <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Popular Cars</h2>
        <div className="vehicle-list">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      <div className="customer-reviews" ref={(el) => (sectionsRef.current[2] = el)}>
      <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Customer Reviews</h2>
        <div className="cus-review">
          <div className="reviews-list">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="reviews-slider"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

            <button>View More</button>

          </div>
          <div className="review-bg">
      
        </div>
        </div>
        
      </div>

    <section className="locations" ref={(el) => (sectionsRef.current[3] = el)}>
      <div className="location-map">
          <SriLankaMap/>
      </div>
      <div className="location-cards">
        <h1>Locations Island-wide</h1>
        <div className="location-grid">
            {locations.map((loc, index) => (
              <LocationCard key={index} title={loc.title} image={loc.image} />
            ))}

      {/* <VehicleSlider vehicles={locations} /> */}
          </div> 
        </div>
    </section> 


      {/* <section className="locations">
        <div className="location-map">
          <SriLankaMap />
        </div>
        <div className="location-cards">
          <Swiper>
            {locations.map((loc, index) => (
              <SwiperSlide key={index}>
                <LocationCard title={loc.title} image={loc.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

<section className="why-us" ref={(el) => (sectionsRef.current[4] = el)}>
        <h2>Why Choose Us?</h2>
        <div className="why-us-items">
          {whyUsItems.map((item, index) => (
            <WhyUsItem key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
      </section>





      <footer>
        <div className="footer-top" id="footer-top">
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

export default DashBoard;




import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/Logo.jpg';
import { FaUserCircle, FaBell, FaSignOutAlt } from "react-icons/fa";
import LoginModal from "./LoginModal"; // Import the LoginModal component

function Navbar({ isLoggedIn }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add logout logic here
        navigate("/");
    };

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={`nav_main ${isModalOpen ? "blurred" : ""}`}> {/* Apply blur when modal is open */}
            <div className="nav_left">
                <img src={Logo} alt="Logo" height="100%" />
            </div>
            <div className="nav_center">
                <Link to="/" className="nav_link">Home</Link>
                <Link to="/vehicles" className="nav_link">Browse Vehicles</Link>
                <Link to="/MyBooking" className="nav_link">My Bookings</Link>
                <Link to="/about" className="nav_link">About Us</Link>
                <Link to="/contact" className="nav_link">Contact Us</Link>
            </div>
            <div className="nav_right">
                {isLoggedIn ? (
                    <div className="icons_container">
                        <FaBell className="notification_icon" size={25} color="white" />
                        <FaUserCircle className="profile_icon" size={25} color="white" />
                        <FaSignOutAlt className="logout_icon" size={25} color="white" onClick={handleLogout} />
                    </div>
                ) : (
                    <>
                        <button className="nav_button" onClick={handleLoginClick}>Login</button>
                        <button className="nav_button signup" onClick={() => navigate("/signup")}>Sign Up</button>
                    </>
                )}
            </div>

            {isModalOpen && <LoginModal onClose={closeLoginModal} />} {/* Show modal when open */}
        </div>
    );
}

export default Navbar;

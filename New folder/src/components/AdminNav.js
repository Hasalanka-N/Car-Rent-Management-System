import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from '../images/Logo.jpg'
import '../styles/AdminNav.css';
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUserCircle, FaBell, FaSignOutAlt, FaClipboardList, FaCar, FaUsers, FaStar } from "react-icons/fa";

function AdminNav(){

    const navigate = useNavigate();
    const location = useLocation();
    
    return(
        <div className="Admin-Nav">
            <div className="Ad-logo">
                <img src={Logo} alt="My Image" width={'80px'}/>
            </div>
            <div className="Ad-nav-container">
                <div className="nav-border">
                    
                </div>
                <FaClipboardList size={20} />
                <FaCar size={20} /> 
                <FaUsers size={20}/>
                <FaBell 
                    className="notification_icon cursor-pointer" 
                    size={20} 
                />
                <FaUserCircle 
                    className="profile_icon" 
                    size={20} 
                 />
                 <FaStar
                     className="review_icon" 
                     size={20} 
                     onClick={() => navigate("/AllReviews")}
                  />
                 <FaSignOutAlt className="logout_icon" size={20} />
            </div>
        </div>
    );
}
export default AdminNav;
import React,{ useState } from "react";
import './RegisForm.css';
import { FaUser,FaLock,FaEnvelope,FaMobileAlt,FaBuilding,FaIdCard,FaKey } from "react-icons/fa";

const RegisForm = () =>  {

        const [role, setRole] = useState("user"); // Default role selection
        const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          nic: "",
          mobile: "",
          city: "",
          adminSecret: "",
        });
      
        // Handle input change
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        // Handle role selection
        const handleRoleChange = (selectedRole) => {
          setRole(selectedRole);
          setFormData({ ...formData, adminSecret: "" }); // Reset admin secret if switching
        };
      
        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Data:", { ...formData, role });
          alert(`Registered as ${role.toUpperCase()}`);
        };

    return (
      <div className="body-register">
        <div className='wrapper'>
            <form action="">
              <h1>Registration </h1>

              {/* Role Selection Buttons */}
              <div className="role-selection">
                <button className={role === "user" ? "active" : ""} onClick={() => handleRoleChange("user")}>User</button>
                <button className={role === "admin" ? "active" : ""} onClick={() => handleRoleChange("admin")}>Admin</button>
              </div>

              <div className="input-box">
                  <input type="text" placeholder='First Name'  required /> 
                  <FaUser className='icon' />   
              </div>
              <div className="input-box">
                  <input type="text" placeholder='Last Name'  required /> 
                  <FaUser className='icon' />   
              </div>
              <div className="input-box">
                  <input type="email" placeholder='Email'  required /> 
                  <FaEnvelope className='icon' />   
              </div>
              <div className="input-box">
                  <input type="password" placeholder='Password'  required />    
                  <FaLock className='icon' />
              </div>
              <div className="input-box">
                  <input type="text" placeholder='NIC'  required /> 
                  <FaIdCard User className='icon' />   
              </div>
              <div className="input-box">
                  <input type="text" placeholder='Mobile'  required /> 
                  <FaMobileAlt className='icon' />   
              </div>
              <div className="input-box">
                  <input type="text" placeholder='City'  required /> 
                  <FaBuilding  className='icon' />   
              </div>

              {/* Admin Secret Key Field - Only Visible for Admins */}
              {role === "admin" && (
                <div className="input-box">
                <input type="text" name="adminSecret" placeholder="Enter secret key" onChange={handleChange} required />
                <FaKey className= 'icon' />
                </div>
              )}

              <button type="submit" class="regisBtn">Register</button>

              <div className="register-link">
                 <p> Already have an account?  <a href="/login"> Login</a> </p>
              </div>

            </form>
          
        </div>
        </div>
    );

};

export default RegisForm;



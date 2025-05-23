import React, { useState } from "react";
import "../styles/LoginModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function LoginModal({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignup && <input type="password" placeholder="Confirm Password" />}
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <div className="separator">or continue with</div>
            <div className="social-buttons">
            <button className="google-btn">
                <FontAwesomeIcon icon={faGoogle} /> Google
            </button>
            <button className="facebook-btn">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </button>
        </div>


        <p className="toggle-msg">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login here" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;

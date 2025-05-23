import React from 'react';
import '../styles/LoginForm.css'
import { FaUser,FaLock } from "react-icons/fa";

const LoginForm = () =>  {
    return (
        <div className='loin-page'>
        <div className='wrapper'>
            <form action="">
              <h1>Login </h1>
              <div className="input-box">
                  <input type="text" placeholder='Username'  required /> 
                  <FaUser className='icon' />   
              </div>
              <div className="input-box">
                  <input type="password" placeholder='Password'  required />    
                  <FaLock className='icon' />
              </div>

              <div className="remember-forgot">
                    <label> <input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot password?</a>
              </div>

              <button type="submit" class="loginBtn">Login</button>

              <div className="register-link">
                 <p> Don't have an account?  <a href="/register"> Register</a> </p>
              </div>

            </form>
          
        </div>
        </div>
    );

};

export default LoginForm;
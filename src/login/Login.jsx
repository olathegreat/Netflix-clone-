import React from 'react';
import {Link} from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className='login'>
         <div className='top'>
            <div className='wrapper'>
                    <img
                    className='logo'
                    src='images/netflix-logo.png'
                    alt=""
                    ></img>

                    
            </div>
            <div className='container'>
                <form>
                    <h1><Link to="/login">Sign In</Link></h1>
                    <input type="email" placeholder='email or phone number'/>
                    <input type="password" placeholder="password"/>
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b><Link to="/register">Sign up now</Link></b></span>
                    <small>
                        This page is protected by Google reCAPTHCHA to ensure
                        you're not a bot. <b>Learn more</b>.
                    </small>

                </form>
            </div>
            
        </div>
      
    </div>
  );
}

export default Login;

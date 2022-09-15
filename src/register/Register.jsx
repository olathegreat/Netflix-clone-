import React, {useState, useRef} from 'react';
import "./Register.scss";

const Register = () => {
    const[email, setEmail]  = useState("");
    const [password, setPassword]= useState("");

    const handleStart = () =>{
        setEmail(emailRef.current.value);
    }
   const handleFinish = () =>{
    setPassword(passwordRef.current.value);
   }
    const emailRef = useRef();
    const passwordRef = useRef();
  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
             
                        <img
                            className='logo'
                            src='images/netflix-logo.png'
                            alt=""
                            ></img>

                
                   

                    <button className='loginButton'>Sign In</button>

            </div>
            
        </div>

        <div className='container'>
            <h1>Unlimited movies, TV Shows, and more.</h1>
            <h2>Watch anywhere, Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart
                 your membership

            </p>
            {
                !email ? (

                <div className='input'>
                    <input ref={emailRef} type="email" placeholder="email address"></input>
                    <button className="registrationButton" onClick={handleStart}>Get Started</button>
                </div>

                ):(
               <form className='input'>
                    <input ref={passwordRef} type="password" placeholder="password"></input>
                    <button className="registrationButton" onClick={handleFinish}>Start Membership</button>
                </form>
                )
            }
           
        </div>
      
    </div>
  );
}

export default Register;

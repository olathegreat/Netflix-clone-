import { ArrowDropDown, Search, Notifications } from '@mui/icons-material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset=== 0 ? false: true);
        return ()=> window.onscroll = null;
    }
    console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
            <img src='images/netflix-logo.png'/>
            
            <span><Link to="/">Homepage</Link></span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className='right'>
             <Search className="icon"/>
             <span>KID</span>
             <Notifications className="icon"/>
             <img src='images/profile.jpg' alt=""/>

             <div className="profile">

               <ArrowDropDown className="icon"/>
               <div className='options'>
                <span>Settings</span>
                <span><Link to="/login">Login</Link></span>
               </div>
             </div>
             
        </div>
        
      </div>

    </div>
  );
}

export default Navbar;

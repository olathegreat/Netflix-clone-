import React from 'react';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import "./Watch.scss";


const Watch = () => {
    const navigate = useNavigate();
  return (
    <div className='watch'>
       <div className='back'>
        <ArrowBackOutlined onClick={()=>navigate("/")}/>
        </div>  
        <video className='video' autoPlay progress controls src="images/video4.mp4"></video>    
    </div>
  );
}

export default Watch;

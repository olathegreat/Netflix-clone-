import React ,{useState} from 'react';
import "./ListItem.scss";
import { PlayArrow, Add, ThumbDownOutlined, ThumbUpAltOutlined} from '@mui/icons-material';
import {Link} from "react-router-dom";
const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false); 
  return (
    <div className='listitem'
    style={{left: isHovered && index * 225  -  50 + index * 2.5}}
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}>
        <img src="images/download.jpg"></img>
        {
            isHovered && (
            <>
               <Link to="/watch">
                   <video src="images/video4.mp4" autoPlay={true} loop/>
               </Link>
                
                <div className="itemInfo">
                    <div className="icons">
                        <Link to="/watch">
                           <PlayArrow className='icon'/>
                        </Link>
                       
                        <Add className='icon'/>
                        <ThumbUpAltOutlined className='icon'/>
                        <ThumbDownOutlined className='icon'/>
                    </div>
                    <div className='itemInfoTop'>
                        <span>1 hour 14 mins</span>
                        <span className='limit'>+16</span>
                        <span>1999</span>
                    </div>
                    <div className='description'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.

                    </div>
                    <div className="genre">Action</div>

              </div>
            </>

            )
        }
        

        
      
    </div>
  );
}

export default ListItem;

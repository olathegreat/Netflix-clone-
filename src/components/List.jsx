import React, {useRef, useState} from 'react';
import "./List.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from './ListItem';

const List = () => {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) =>{

        let distance = listRef.current.getBoundingClientRect().x - 50

        

        if(direction==="left" && slideNumber > 0){
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            setSlideNumber(slideNumber - 1);
        }
        if(direction==="right" && slideNumber<5){
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSlideNumber(slideNumber +1);
            setIsMoved(true);
        }
    }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined style={{display:!isMoved && "none"}} onClick={()=>handleClick("left")} className='sliderArrow left'/>
            <div className="container" ref={listRef}>
            
                <ListItem index={0} />
                <ListItem index={1} />
                <ListItem index={2} />
                <ListItem index={3} />
                <ListItem index={4} />
                <ListItem index={5} />
                <ListItem index={6} />
                <ListItem index={7} />
                <ListItem index={8} />
                <ListItem index={9} />
                {/* <ListItem index={0} />
                <ListItem index={0} /> */}
            </div>
            <ArrowForwardIosOutlined onClick={()=>handleClick("right")} className='sliderArrow right'/>
        </div>
      
    </div>
  );
}

export default List;

import React from 'react';
import "./Featured.scss";
import { PlayArrow, InfoOutlined } from '@mui/icons-material';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type=== "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
                    

                </select>
            </div>
        )}
      <img src="images/jumbotronimg.jpg" width="100%"/>

      <div className='info'>
        <img src="images/movietext.png"/>
        <span className='Description'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing 
        elit. Aenean commodo ligula eget dolor. Aenean massa.
         Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, 
          ultricies nec, pellentesque eu, pretium quis, sem.
           Nulla consequat massa quis enim. Donec pede justo, 
           fringilla vel, aliquet nec, vulputate eget, arcu. 
           In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum 
        felis eu pede mollis pretium. Integer tincidunt


        </span>
        <div className='buttons'>
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import List from '../components/List';
import React from 'react';
import Featured from '../components/Featured';
import Navbar from '../components/Navbar';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="movie"/>
      <List/>
      <List/>
     
    </div>
  );
}

export default Home;

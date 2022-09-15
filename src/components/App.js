import "./App.scss";
import Home from '../Home/Home';
import Watch from "../watch/Watch";
import Register from "../register/Register";
import Login from "../login/Login";
import {Routes, Route} from "react-router-dom";


const App = () => {
  return (
    <Routes>
        {/* <Home/> */}
        {/* <Watch/> */}
        {/* <Register/> */}
        
        <Route path="/" exact element={<Home/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  
  
   );
}

export default App;

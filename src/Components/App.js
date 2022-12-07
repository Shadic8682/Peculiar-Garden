import React, {useEffect} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
// import logo from '../Assets/Logos/logo.svg';
import '../Stylesheets/App.css';
import GardenerLogin from "./GardenerLogin"
import SeasonsCarousel from "./SeasonsCarousel"
import Garden from "./SeasonsCarousel"
import ProduceContainer from "./ProduceContainer"
import HarvestContainer from "./HarvestContainer"



const firstEndPoint = "http://localhost:9292/gardens"

function App() {
  
  useEffect(() =>  {
   fetch(firstEndPoint)
   .then((response) => response.json())
   .then((data) => console.log(data))
  },
  [])

  return (
    <div>
      <header>
      </header>
      <Routes>
        <Route 
        path='/login'
        element={
          <GardenerLogin/>
        }>
        </Route>
        <Route 
        path='/season'
        element={
          <SeasonsCarousel/>
        }>
        </Route>
        <Route 
        path='/produce'
        element={
          <ProduceContainer/>
        }>
        </Route>
        <Route 
        path='/garden'
        element={
          <Garden/>
        }>
          <Route path='/garden/harvest' element={<HarvestContainer/>}/>
        </Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;

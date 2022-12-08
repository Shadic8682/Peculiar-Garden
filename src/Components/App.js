import React, {useEffect, useState} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
// import logo from '../Assets/Logos/logo.svg';
import '../Stylesheets/App.css';
import GardenerLogin from "./GardenerLogin"
import SeasonsCarousel from "./SeasonsCarousel"
import Garden from "./Garden"
import CropContainer from "./CropContainer"
import HarvestContainer from "./HarvestContainer"

function App() {
  const [currentGarden, setCurrentGarden] = useState()

  console.log(currentGarden)

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
          <SeasonsCarousel setCurrentGarden={setCurrentGarden}/>
        }>
        </Route>
        <Route 
        path='/crops'
        element={
          <CropContainer currentGarden={currentGarden}/>
        }>
        </Route>
        <Route 
        path='/garden'
        element={
          <Garden currentGarden={currentGarden}/>
        }>
          <Route path='/garden/harvest' element={<HarvestContainer/>}/>
        </Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
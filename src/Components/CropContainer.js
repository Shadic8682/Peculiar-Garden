import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Crop from "./Crop";

const gardensUrl = "http://localhost:9292/crops";

const CropContainer = ({ currentGarden }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [crops, setCrops] = useState([]);
  const [plantedCropIDs, setPlantedCropIDs] = useState([]);

  useEffect(() => fetchCrops(), []);

  function fetchCrops() {
    fetch(gardensUrl)
      .then((response) => response.json())
      .then((data) => setCrops(data));
  }

  function assignCrops() {
    setTimeout(() => {
      console.log(plantedCropIDs)
      navigate('/garden')
      plantedCropIDs.map((cropID) => {
        fetch(`http://localhost:9292/crops/${cropID}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ garden_id: currentGarden.id }),
        });
      })
    }, 100);
  }


  const renderCrops = [...crops].filter((crop) => crop.season === currentGarden.season).map((eachCrop) => {
    return (
      <Crop
        id={eachCrop.id}
        cropName={eachCrop.name}
        season={eachCrop.season}
        description={eachCrop.description}
        growth_time={eachCrop.growth_time}
        plantedCropIDs={plantedCropIDs}
        setPlantedCropIDs={setPlantedCropIDs}
        img_url={eachCrop.img_url}
      />
    );
  });

  return (
    <div id="crops-screen">
      <h1 className="page-header">PICK CROPS TO PLANT!</h1>
      <div className="crop-container">
        {renderCrops}
      </div>
      <button className="button-1" onClick={assignCrops}>Plant Crops</button>
    </div>
  );
};

export default CropContainer;
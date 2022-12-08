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
    navigate('/garden')
    plantedCropIDs.map((cropID) => {
      fetch(`http://localhost:9292/crops/${cropID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ garden_id: currentGarden.id }),
      });
    })
    console.log(plantedCropIDs)
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
      />
    );
  });

  return (
    <div>
      <h1>You're on {location.pathname}!</h1>
      {renderCrops}
      <button onClick={assignCrops}>Plant Crops</button>
    </div>
  );
};

export default CropContainer;
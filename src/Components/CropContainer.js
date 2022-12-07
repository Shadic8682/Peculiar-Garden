import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Crop from "./Crop";

const gardensUrl = "http://localhost:9292/crops";

const CropContainer = () => {
  const location = useLocation();

  const [crops, setCrops] = useState([]);

  useEffect(() => fetchCrops(), []);

  function fetchCrops() {
    fetch(gardensUrl)
      .then((response) => response.json())
      .then((data) => setCrops(data));
  }

  const renderCrops = crops.map((eachCrop) => {
    return (
      <Crop
        id = {eachCrop.id}
        cropName={eachCrop.name}
        season={eachCrop.season}
        description={eachCrop.description}
        growth_time={eachCrop.growth_time}
      />
    );
  });

  return (
    <div>
      <h1>You're on {location.pathname}!</h1>
      {renderCrops}
    </div>
  );
};

export default CropContainer;

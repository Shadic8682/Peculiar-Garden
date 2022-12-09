import React, { useState } from "react";

function Crop({ id, cropName, season, description, growth_time, plantedCropIDs, setPlantedCropIDs, img_url }) {
  const [isSelected, setSelected] = useState(false)
  function clickHandler() {
    console.log('clicked')
    if (!isSelected) {
      setPlantedCropIDs([...plantedCropIDs, id])
    } else {
      setPlantedCropIDs([...plantedCropIDs].filter(cropID => cropID !== id))
    }
    setSelected(!isSelected)

  }

  return (
    <div className={!isSelected ? "crop-wrapper" : "crop-wrapper selected"} onClick={clickHandler}>
      <h1>{cropName}</h1>
      {/* <h3>{season}</h3> */}
      <p>{description}</p>
      <h4>Time to Grow: {growth_time} Weeks</h4>
      <img
        src={img_url}
        alt="some_name" className="image-size"
      />
    </div>
  );
}

export default Crop;


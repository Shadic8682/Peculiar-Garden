import React, { useState } from "react";

function Crop({ id, cropName, season, description, growth_time, plantedCropIDs, setPlantedCropIDs }) {
  const [isSelected, setSelected] = useState(false)

  function clickHandler() {
    if (!isSelected) {
      setPlantedCropIDs([...plantedCropIDs, id])
    } else {
      setPlantedCropIDs([...plantedCropIDs].filter(cropID => cropID !== id))
    }
    setSelected(!isSelected)

  }

  return (
    <div className="crop-wrapper" onClick={clickHandler}>
      <h1>{cropName}</h1>
      <h3>{season}</h3>
      <p>{description}</p>
      <h4>{growth_time}</h4>
      <img
        src="https://previews.123rf.com/images/dreamcreation01/dreamcreation011609/dreamcreation01160900211/63269274-vector-illustration-of-cartoon-vegetable-garden-farm-background.jpg"
        alt="some_name" className="imageSize"
      />
      image
    </div>
  );
}

export default Crop;
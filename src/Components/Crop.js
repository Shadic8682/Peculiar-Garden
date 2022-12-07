import React, { useState } from "react";

function Crop(props) {
  function clickHandler() {
    fetch(`http://localhost:9292/crops/${props.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ garden_id: 6 }),
    });
  }

  return (
    <div onClick={clickHandler}>
      <h1>{props.cropName}</h1>
      <h3>{props.season}</h3>
      <p>{props.description}</p>
      <h4>{props.growth_time}</h4>
      <img
        src="https://previews.123rf.com/images/dreamcreation01/dreamcreation011609/dreamcreation01160900211/63269274-vector-illustration-of-cartoon-vegetable-garden-farm-background.jpg"
        alt="some_name"
      />
      image
    </div>
  );
}

export default Crop;

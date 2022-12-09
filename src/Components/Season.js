import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Season = ({ currentGarden, seasonChange, seaObj}) => {

    const handleClick = () => {
        seasonChange(seaObj)
    }

    return (
        <div onClick={handleClick} className={currentGarden.season !== seaObj.season ? "season-card" : "season-card selected"}>
            <h1>{seaObj.season}</h1>
        </div>    
)}

export default Season;
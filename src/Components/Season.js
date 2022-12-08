import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Season = ({ seasonChange, seaObj}) => {
    const handleClick = () => {
        seasonChange(seaObj)
    }

    return (
        <div onClick={handleClick}>
            <h1>{seaObj.season}</h1>
        </div>    
)}

export default Season;
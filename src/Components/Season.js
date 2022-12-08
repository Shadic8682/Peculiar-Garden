import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Season = ({id, season, crops, seasonChange}) => {

    const handleClick = () => {
        seasonChange(id)
    }

    return (
        <div onClick={handleClick}>
            <h1>{season}</h1>
        </div>    
)}

export default Season;
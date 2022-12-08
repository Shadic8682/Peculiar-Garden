import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Season = ({key, season, crops, seasonChange}) => {

    const handleClick = () => {
        seasonChange(key)
    }

    return (
        <div onClick={handleClick}>
            <h1>{season}</h1>
        </div>    
)}

export default Season;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Crop from "./Crop"

const Garden = ({ currentGarden }) => {
    const location = useLocation()
    const [selectedCrops, setSelectedCrops] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/gardens/${currentGarden}`)
            .then(response => response.json())
            .then(garden => setSelectedCrops(garden.crops))
    }, [])

    const plantedCrops = selectedCrops.map(crop => {
        return (
            <Crop cropName={crop.name} season={crop.season} description={crop.description} growth-time={crop.growth_time} />
        )
    })

    return (
        <div className="container">
            <header>Hi!</header>
            <div id="garden-container">
                <button className="harvest-crop">Harvest Crop</button>
                <div id="garden-plot">
                    {plantedCrops}
                </div>
                <button className="delete-crop">Delete Crop</button>
            </div>
            <button className="switch-season">Switch Seasons</button>
        </div>
    )
}

export default Garden
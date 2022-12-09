import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Crop from "./Crop"
import HarvestContainer from "./HarvestContainer";

const Garden = ({ currentGarden }) => {
    const location = useLocation()
    const [selectedCrops, setSelectedCrops] = useState([])
    const [harvestedCrops, setHarvestedCrops] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/gardens/${currentGarden.id}`)
            .then(response => response.json())
            .then(garden => setSelectedCrops(garden.crops))
    }, [])

    const plantedCrops = selectedCrops.map(crop => {
        return (
            <Crop cropName={crop.name} season={crop.season} description={crop.description} growth-time={crop.growth_time} />
        )
    })

    return (
        <div id="garden-screen">
            <div id="garden-container">
                <button className="button-1">Harvest Crop</button>
                <div id="garden-plot">
                    {plantedCrops}
                </div>
                <button className="button-1">Delete Crop</button>
            </div>
            <button className="button-1">Switch Seasons</button>
            <HarvestContainer/>
        </div>
    )
}

export default Garden
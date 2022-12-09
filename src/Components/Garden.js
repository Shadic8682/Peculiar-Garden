import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Crop from "./Crop"
import HarvestContainer from "./HarvestContainer";

const Garden = ({ currentGarden }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [selectedCrops, setSelectedCrops] = useState([])
    const [harvestedCrops, setHarvestedCrops] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/gardens/${currentGarden.id}`)
            .then(response => response.json())
            .then(garden => setSelectedCrops(garden.crops))
    }, [])

    const handleDelete = () => {
        fetch(`http://localhost:9292/gardens/${currentGarden.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        setSelectedCrops([])
        navigate('/crops')
    }

    const plantedCrops = selectedCrops.map(crop => {
        return (
            <Crop img_url={crop.img_url} cropName={crop.name} season={crop.season} description={crop.description} growth_time={crop.growth_time} />
        )
    })

    return (
        <div id="garden-screen">
            <div id="garden-container">
                <button className="button-1">Harvest Crop</button>
                <div id="garden-plot">
                    {plantedCrops}
                </div>
                <button onClick={handleDelete} className="button-1">Delete Crops</button>
            </div>
            <button className="button-1">Switch Seasons</button>
            <HarvestContainer/>
        </div>
    )
}

export default Garden
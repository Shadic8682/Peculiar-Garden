import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import Season from "./Season"

const SeasonsCarousel = ({ setCurrentGarden }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const [seasons, setSeasons] = useState([])

    const seasonCollection = seasons.map(seaObj => <Season key={seaObj.id} seaObj={seaObj} seasonChange={setCurrentGarden} />)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:9292/gardens")
                .then(response => response.json())
                .then(data => setSeasons(data))
        }, 1);
    }, [])

    const handleClick = () => {
        navigate('/crops')
    }

    return (
        <div className="seasonContainer">
            {seasonCollection}
            <button onClick={handleClick}>Select Your Crops</button>
        </div>

    )
}

export default SeasonsCarousel;

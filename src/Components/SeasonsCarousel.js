import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import Season from "./Season"

const SeasonsCarousel = ({setGarden}) => {
    const location = useLocation()
    const [seasons, setSeasons] = useState([])

    const seasonCollection = seasons.map(seaObj => <Season key={seaObj.id} id={seaObj.id} season={seaObj.season} crops={seaObj.crops} seasonChange={setGarden}/>)

    

    useEffect(() => {
        fetch("http://localhost:9292/gardens")
        .then(response => response.json())
        .then(data => setSeasons(data))
    }, [])


    return(
    <div>
        <h1>You're on {location.pathname}!</h1>
        {seasonCollection}
    </div>
    )
}

export default SeasonsCarousel;

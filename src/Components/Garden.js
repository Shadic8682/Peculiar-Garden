import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Garden = () => {
    const location = useLocation()

    return(
    <div>
        <h1>You're on {location.pathname}!</h1>
    </div>
    )
}

export default Garden
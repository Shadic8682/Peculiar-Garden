import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GardenerLogin = ({ setName }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const [nameInput, setNameInput] = useState('')

    const handleInput = (e) => {
        setNameInput(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/gardeners',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: nameInput,
                }
                )
            }
        )
        setName(nameInput)
        navigate('/season')
    }

    return (
        <div id="login-screen">
            <div className="container">
                <div id="login">
                    <h1>Your Peculiar Garden</h1>
                    <form onSubmit={handleLogin}>
                        <input className="text-input" placeholder="Enter Name" onChange={handleInput} type="text" name="name" value={nameInput} />
                        <input className="button-1" type="submit" name="login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GardenerLogin
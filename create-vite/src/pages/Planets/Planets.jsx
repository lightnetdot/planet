import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Planets = () => {
    const [planetData, setPlanetData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((json) => setPlanetData(json))
            .catch((error) => console.error("Error to load", error));
    }, []); 

    const navigate = useNavigate();

    const handlePlanetClick = (planet) => {
        navigate(`/planet/${planet.name}`, { state: planet });
    };

    return (
        <div>
            <ul>
                {planetData.map((planet) => (
                    <li key={planet.name}> 
                        <button onClick={() => handlePlanetClick(planet)}>{planet.name}</button>
                        <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Planets;

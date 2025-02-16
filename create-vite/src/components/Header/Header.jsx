import React from "react";
import { Link } from "react-router-dom";

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const Header = () => {
    return (
        <nav style={{ 
            display: "flex", 
            gap: "20px", 
            padding: "10px", 
            background: "#0b0d23", 
            color: "#9494a1",
            justifyContent: "flex-end",
        }}>
            {planets.map((planet) => (
                <Link 
                    key={planet} 
                    to={`/${planet.toLowerCase()}`} 
                    style={{ textDecoration: "none", color: "white", opacity: "50%"}}
                >
                    {planet.toUpperCase()}
                </Link>
            ))}
        </nav>
    );
};

export default Header;

import React from "react";
import Icon from "../Icon";
import "./style.css"

const main = [
    {
        name: "inicio",
        src: "../../assets/home.png"
    },
    {
        name: "search",
        src: "../../assets/search.png"
    },
    {
        name: "em breve",
        src: "../../assets/later.png"
    },
    {
        name: "downloads",
        src: "../../assets/downloads.png"
    },
    {
        name: "mais",
        src: "../../assets/more.png"
    }
]

const Footer = () => {
    
    return (
        <div id='footer'>
            {main.map((pk) => <Icon name={pk.name} image={pk.src}/> )}
        </div>
    );
};

export { Footer };
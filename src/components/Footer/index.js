import React from "react";
import Icon from "../Icon";
import "./style.scss"

const main = [
    {
        name: "inicio",
        src_deactivate: "../../assets/home0.svg",
        src_active: "../../assets/home1.svg",
    },
    {
        name: "search",
        src_deactivate: "../../assets/search0.svg",
        src_active: "../../assets/search1.svg",
    },
    {
        name: "em breve",
        src_deactivate: "../../assets/later0.svg",
        src_active: "../../assets/later1.svg",
    },
    {
        name: "downloads",
        src_deactivate: "../../assets/downloads0.svg",
        src_active: "../../assets/downloads1.svg",
    },
    {
        name: "mais",
        src_deactivate: "../../assets/more0.svg",
        src_active: "../../assets/more1.svg",
    }
]

const Footer = () => {
    
    return (
        <div id='footer'>
            {main.map((option) => <Icon name={option.name} image={option.src_deactivate}/> )}
        </div>
    );
};

export { Footer };
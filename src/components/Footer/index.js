import React from "react";
import Icon from "../Icon";

import "./style.scss"

import { useLocation } from 'react-router-dom';

const main = [
    {
        pathname: "/",
        name: "inicio",
        src_deactivate: "../../assets/footer/home0.svg",
        src_active: "../../assets/footer/home1.svg",
    },
    {
        pathname: "/search",
        name: "search",
        src_deactivate: "../../assets/footer/search0.svg",
        src_active: "../../assets/footer/search1.svg",
    },
    {
        pathname: "/later",
        name: "em breve",
        src_deactivate: "../../assets/footer/later0.svg",
        src_active: "../../assets/footer/later1.svg",
    },
    {
        pathname: "/downloads",
        name: "downloads",
        src_deactivate: "../../assets/footer/downloads0.svg",
        src_active: "../../assets/footer/downloads1.svg",
    },
    {
        pathname: "/more",
        name: "mais",
        src_deactivate: "../../assets/footer/more0.svg",
        src_active: "../../assets/footer/more1.svg",
    }
]

const Footer = () => {
    
    const location = useLocation();

    return (
        <div id='footer'>
            {main.map((option) => <Icon name={option.name} image={ location.pathname === option.pathname ? option.src_active : option.src_deactivate }/> )}
        </div>
    );
};

export { Footer };
import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";
import { OptionsPoster } from "../../components/OptionPoster";
import { Footer } from "../../components/Footer";
import { KeepWhatchingBody } from "../../components/KeepWhatchingBody";
import { Trending } from "../../components/Trending";

import "./style.scss";

import { fetchShows } from "../../services";

import { useEffect, useState } from "react";

const Home = () => {

    const [response, getResponse] = useState(undefined);
    
    useEffect(() => { 
        const fetchAsync = async () => { 
            const data = await fetchShows(); 
            getResponse(data);
        }
        fetchAsync();
    }, [])

    return (
        <>
            <Header/>
            <Poster/>
            <OptionsPoster/>
            <KeepWhatchingBody response={response}/>
            <Trending response={response}/>
            <Footer/>
        </>
    );
};

export { Home };
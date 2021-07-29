import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";
import { OptionsPoster } from "../../components/OptionPoster";
import { Footer } from "../../components/Footer";
import { KeepWhatchingBody } from "../../components/KeepWhatchingBody";
import { Trending } from "../../components/Trending";

import "./style.scss";

import { fetchShows } from "../../services";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const [data, setResponse] = useState(undefined);

    useEffect(() => {
        const fetchAsync = async () => {
            const response = await fetchShows();
            setResponse(response);
        };
        fetchAsync();
    }, []);
    const trending = data ? data.slice(10, 20) : undefined;
    const location = useLocation();
    const hide = location.pathname === "/";
    console.log(">>>>>>>>>>>>>>>>>>>> Projeto realizado por Henrique Calenzo, Ludmila Magalhães e Charles Carris, durante o curso do Estartando Devs <<<<<<<<<<<<<<<<<<<<")
    return (
        <>
            <Header />

            {data && (
                <div id="home">
                    <Poster data={data} />
                </div>
            )}

            <OptionsPoster />
            <KeepWhatchingBody data={data} hide={hide} />
            <Trending data={trending} hide={hide} />
            <Footer />
        </>
    );
};

export { Home };

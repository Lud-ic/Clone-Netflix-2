import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";
import { OptionsPoster } from "../../components/OptionPoster";
import { Footer } from "../../components/Footer";
import { KeepWhatchingBody } from "../../components/KeepWhatchingBody";

import "./style.scss";
import { Trending } from "../../components/Trending";

const Home = () => {

    return (
        <>
            <Header />
            <Poster />
            <OptionsPoster />
            <KeepWhatchingBody />
            <Trending />
            <Footer />
        </>
    );
};

export { Home };
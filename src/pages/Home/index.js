import { Header } from "../../components/Header";
import { OptionsPoster } from "../../components/OptionPoster";
import { Footer } from "../../components/Footer";

import "./style.scss";
import { Trending } from "../../components/Trending";

const Home = () => {
    return (
        <>
            <Header/>,
            <OptionsPoster/>,
            <Trending/>,
            <Footer/>,
        </>
    );
};

export { Home };
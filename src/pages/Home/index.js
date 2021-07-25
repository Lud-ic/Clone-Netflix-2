import { Header } from "../../components/Header";
import { OptionsPoster } from "../../components/OptionPoster";
import { Footer } from "../../components/Footer";
import { KeepWhatchingBody } from "../../components/KeepWhatchingBody";

import "./style.scss";

const Home = () => {
    return (
        <>
            <Header/>
            <OptionsPoster/>
            <KeepWhatchingBody/>
            <Footer/>
        </>
    );
};

export { Home };
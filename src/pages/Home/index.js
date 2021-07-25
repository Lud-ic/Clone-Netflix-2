import { Header } from "../../components/Header";
import { Poster } from "../../components/Poster";
import { OptionsPoster } from "../../components/OptionPoster";
import { Footer } from "../../components/Footer";

import "./style.scss";

const Home = () => {
  return (
    <>
      <Header />,
      <Poster />,{/* <OptionsPoster />, */}
      <Footer />
    </>
  );
};

export { Home };

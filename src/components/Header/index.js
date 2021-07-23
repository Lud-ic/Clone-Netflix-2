import "./style.scss";
import netflixlogo from "../../assets/netflix-logo.png";
import avatar from "../../assets/steve.png";
import search from "../../assets/search.png";
const Header = () => {
  console.log("Componente Header");

  return (
    <div id="head">
      <img id="logo" src={netflixlogo} />
      <img id="search" src={search} />
      <img id="avatar" src={avatar} />

      <span>Séries</span>
      <span>Filmes</span>
      <span>Minha lista</span>
    </div>
  );
};

export { Header };

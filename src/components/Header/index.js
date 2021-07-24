import "./style.scss";
import netflixlogo from "../../assets/netflix-logo.png";
import avatar from "../../assets/steve.png";
import search from "../../assets/search.png";
const Header = () => {
  console.log("Componente Header");

  return (
    <div id="head">
      <div>
        <img id="logo" src={netflixlogo} />
      </div>
      <div>
        <img id="search" src={search} />
        <img id="avatar" src={avatar} />
      </div>
      <div id="fundopng"></div>
      <div id="headoptions">
        <br />
        <span onMouseEnter="click">Séries</span>
        <span>Filmes</span>
        <span>Minha lista</span>
      </div>
    </div>
  );
};

export { Header };

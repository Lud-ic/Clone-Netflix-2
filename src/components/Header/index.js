import "./style.scss";
import netflixlogo from "../../assets/netflix-logo.png";
import avatar from "../../assets/steve.png";
import search from "../../assets/search.png";
const Header = () => {
  console.log("Componente Header");

  return (
    <div id="head">
      <div class="logo">
        <img id="logo" src={netflixlogo} />
      </div>
      <div id="right">
        <img id="search" src={search} />
        <img id="avatar" src={avatar} />
      </div>
      <ul>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Minha lista</li>
      </ul>
    </div>
  );
};

export { Header };

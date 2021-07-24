import "./style.scss";
 
const Header = () => {
  console.log("Componente Header");

  return (
    <div id="head">
      <div class="logo">
        <img id="logo" src="../../assets/header/netflix-logo.png" alt="logo"/>
      </div>
      <div id="right">
        <img id="search" src="../../assets/header/steve.png" alt="search"/>
        <img id="avatar" src="../../assets/header/search.png" alt="avatar"/>
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

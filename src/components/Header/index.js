import "./style.scss";

const Header = () => {
  return (
    <div id="head">
      <div className="icons">
        <div className="logo">
          <img
            id="logo"
            src="../../assets/header/netflix-logo.png"
            alt="logo"
          />
        </div>
        <div id="right">
          <img id="search" src="../../assets/header/search.svg" alt="search" />
          <img id="avatar" src="../../assets/header/steve.png" alt="avatar" />
        </div>
      </div>
      <div className="fastrav">
        <ul id="texth">
          <li id="lih">Séries</li>
          <li id="lih">Filmes</li>
          <li id="lih">Minha lista</li>
        </ul>
      </div>
    </div>
  );
};

export { Header };

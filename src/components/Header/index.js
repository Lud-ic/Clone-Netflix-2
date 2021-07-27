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
          {/* <img id="avatar" src="../../assets/header/search1.svg" alt="searching" /> */}
          <img id="avatar" src="../../assets/header/steve.png" alt="avatar" />
        </div>
      </div>
      <div className="fastrav">
        <ul>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Minha lista</li>
        </ul>
      </div>
    </div>
  );
};

export { Header };

import "./style.scss";

import { useHistory } from "react-router";

const Header = () => {

  const history = useHistory();

  return (
    <div id="head">
      <div className="icons">
        <div className="logo">
          <img
            id="logo"
            src="../../assets/header/netflix-logo.png"
            alt="logo"
            onClick={() => history.push("/")}
          />
        </div>
        <div id="right">
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

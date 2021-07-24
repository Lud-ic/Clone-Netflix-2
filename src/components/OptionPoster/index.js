import "./style.scss";

const OptionsPoster = () => {

  return (
    <div id="optionsbar">
      <div className="add-list">
        <p className="plus-icon">+</p>
        <p>Minha lista</p>
      </div>
      <button id="watch">
        <p className="play-icon"> 🢒 </p>
        <p className="watch-text">Assistir</p>
      </button>
      <div className="info">
        <p className="info-icon">🛈</p>
        <p>Saiba mais</p>
      </div>
    </div>
  )
}

export { OptionsPoster };
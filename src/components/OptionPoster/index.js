import "./style.scss";

const OptionsPoster = () => {

  return (
    <div id="optionsbar">
      <div className="add-list">
        <p className="plus-icon">+</p>
        <p>Minha lista</p>
      </div>
      <button id="watch">
        <img src="../../assets/optionPoster/play.png" alt="play"/>
        <p className="watch-text">Assistir</p>
      </button>
      <div className="info">
        <img src="../../assets/optionPoster/information.png" alt="optionPoster"/>
        <p>Saiba mais</p>
      </div>
    </div>
  )
}

export { OptionsPoster };
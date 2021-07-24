import "./style.scss";

const OptionsPoster = () => {
  console.log("Componente Section Options");

  return (
    <div id="optionsbar">
      <div className="add-list">
        <p>+</p>
        <p>Minha lista</p>
      </div>
      <div className="watch">
        <p>🢒 Assistir </p>
      </div>
      <div className="info">
        <p>🛈</p>
        <p>Saiba mais</p>
      </div>
    </div>
  )
}

export { OptionsPoster };
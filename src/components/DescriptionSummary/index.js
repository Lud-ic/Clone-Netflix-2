import "./style.scss";

const DescriptionSummary = ({ data }) => {

  return (
    <>
      {data && (
        <div id="summary">
          <h3>{data.name}</h3>
          <div className="time">
            <div className="line">
              <div className="grey-line"></div>
              <div className="red-line"></div>
            </div>

            <div className="remaining-time">Tempo restante: 45m</div>
          </div>
          <p className="summary-text">{data.summary.replace("<p>", "").replace("</p>", "").replace("<b>", "").replace("</b>", "")}</p>
          <p className="info">Elenco: Jesse Plemons, Cristin Milioti, Jimmi Simpson</p>
          <p className="info">Criação: Charlie Brooker</p>
        </div>
      )}
    </>
  );
}

export { DescriptionSummary };
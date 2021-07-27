import "./style.scss";

const DescriptionSummary = ({ response }) => {

  return (
    <>
      {response && (
        <div id="summary">
          <h3>{response.name}</h3>
          {/* <div className="time"> </div> */}
          <p className="summary-text">{response.summary.replace("<p>","").replace("</p>", "").replace("<b>", "").replace("</b>", "")}</p>
          <p className="info">Elenco: Jesse Plemons, Cristin Milioti, Jimmi Simpson</p>
          <p className="info">Criação: Charlie Brooker</p>    
        </div>
      )}
    </>
  );
}

export { DescriptionSummary };
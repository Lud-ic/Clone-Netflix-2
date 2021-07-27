import { Button } from "../Button";

import "./style.scss"

const DescriptionSection = ({ response }) => {

    return (
        <>
            {response && (
                <div id="DescriptionSection">
                    <div style={{
                        backgroundImage: `url(${response?.image.original})`,
                        width: "120px",
                        height: "170px",
                        backgroundSize: "120px",
                    }} />
                    <div id="DescriptionSectionDetails">
                        <h5 className="relevance">95% Relevante</h5>
                        <h5 className="year">2019</h5>
                        <h5 className="age-recomended">18</h5>
                        <h5 className="seasons">4 Temporadas</h5>
                        <div ></div>
                        <h5 className="quality">HD</h5>

                    </div>
                    <Button
                        color={"#FF0000"}
                        width="95%"
                        height="35px"
                        radius={true}
                        text={"Continuar"}
                        textSize={14}
                        textColor={"#FFF"}
                        icon={"../../assets/DescriptionSection/play.png"}
                        iconWidth={16}
                        iconHeight={16}
                    />
                </div>
            )}
        </>
    );
}

export { DescriptionSection }
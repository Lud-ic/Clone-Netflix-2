import "./style.scss";

const DescriptionsComents = () => {
  return (
    <div id="allc">
      <div id="commentaries">
        <div id="evcom">
          <div id="user">
            <img id="uavatar" src="../../assets/commentaries/racoon.jpg" alt="uavatar" />
            <span id="uname">rocket</span>
          </div>
          <div id="areac">
            <span className="tcoment">
              "Série muito boa, Recomendo a todos, eu gostei e creio que vá
              gostar também"
            </span>
            <div className="ard">
              <div className="sratediv">
                <img id="srate" src="../../assets/commentaries/Star.svg" alt="srate"/>
              </div>
              <div className="rating">
                <span className="crate">Nota</span>
                <span id="rate">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DescriptionsComents };

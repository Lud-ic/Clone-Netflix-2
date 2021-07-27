import "./style.scss";

const Button = ({ color, width, height, radius, text, textSize, textColor, icon, iconWidth, iconHeight}) => {
    return (
        <>
            <div id="Button" style={{ 
                backgroundColor: color,
                width: width,
                height: height,
                borderRadius: radius ? `5px` : false
            }}>
                <div style={{
                    backgroundImage: `url(${icon})`,
                    width: `${iconWidth}px`,
                    height: `${iconHeight}px`,
                    backgroundSize: `${iconHeight-5}px`,
                    backgroundRepeat: "no-repeat"
                }}/>
                <h6 style={{
                    fontFamily: "Arial",
                    color: textColor,
                    fontSize: textSize,
                }}>
                    {text}
                </h6>
            </div>
        </>
    );
}

export { Button }
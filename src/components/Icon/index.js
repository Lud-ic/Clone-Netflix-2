import "./style.scss";

const Icon = ({ name, image, pathname }) => {
 
    const base_url = "http://localhost:3000"

    return (
        <div id='icon' onClick={() =>  window.open(`${base_url}${pathname}`, "_self")}>
            <img src={image} alt="logo"/>
            <p>{name}</p>
        </div>
    );
};
 

export default Icon;
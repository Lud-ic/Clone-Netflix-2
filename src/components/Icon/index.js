import "./style.css";

const Icon = ({ name, image }) => {
 
    return (
        <div id='icon'>
            <img src={image} alt="logo"/>
            <p>{name}</p>
        </div>
    );
};
 

export default Icon;
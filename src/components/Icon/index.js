import { useHistory } from "react-router-dom";
import "./style.scss";

const Icon = ({ name, image, pathname }) => {
 
    const location = useHistory();

    return (
        <div id='icon' onClick={() => location.push(`${pathname}`)}>
            <img src={image} alt="logo"/>
            <p>{name}</p>
        </div>
    );
};
 

export default Icon;
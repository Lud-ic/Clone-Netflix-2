import { useHistory } from "react-router-dom";
import "./style.scss";

const Icon = ({ name, image, pathname }) => {
 
    const location = useHistory();

    return (
        <div id='icon' onClick={() => {
            if(pathname !== "/search")
                return location.push(`${pathname}`);
                 
                document.querySelector("#KeepWhatchingBody").style.display = "none";
                document.querySelector("#trending").style.display = "none";
                document.querySelector("#search").style.display = "block";
            return 1;
        }}>
            <img src={image} alt="logo"/>
            <p>{name}</p>
        </div>
    );
};
 

export default Icon;
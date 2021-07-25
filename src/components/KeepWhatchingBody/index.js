import { KeepWhatching } from "../KeepWhatching";

import { fetchShows } from "../../services";

import "./style.scss";

import { useEffect, useState } from "react";
 
const KeepWhatchingBody = () => {
 
    const [response, getResponse] = useState([]);
    
    useEffect(() => { 
        const fetchAsync = async () => { 
            const data = await fetchShows(); 
            getResponse(data);
        }
        fetchAsync();
    }, [])
 
    return (
        <>
            <div id="KeepWhatchingBody">
                <div id="KeepWhatchingBodyText">
                    Continuar assistindo como PEDRO...
                </div>
                <div id="KeepWhatchingBodyChild">
                    {response.map((pk) => 
                        <KeepWhatching 
                            key={`KeepWhatching${pk.id}`}
                            pk={pk.id} 
                            percentage={'30'}
                            image={pk.image.medium}
                            imagePlay={"../../assets/KeepWhatching/play.png"}
                            imageInfo={"../../assets/KeepWhatching/information.png"}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export { KeepWhatchingBody }


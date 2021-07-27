import { KeepWhatching } from "../KeepWhatching";

import "./style.scss";

const KeepWhatchingBody = ({ response }) => {
 
    return (
        <>
            {response && (
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
            )}
        </>
    );
};

export { KeepWhatchingBody }


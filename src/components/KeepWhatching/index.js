import "./style.scss";
 
const KeepWhatching = ({ pk, percentage, image, imagePlay, imageInfo }) => {

    const base_url = "http://localhost:3000"

    return (
        <>
            <div id="KeepWhatching" style={{backgroundImage: `url("${image}")`}}>
                <div id="KeepWhatchingPlayBackground">
                    <div id="KeepWhatchingPlay" style={{backgroundImage: `url("${imagePlay}")`}}/>
                </div>
                <div id="KeepWhatchingTimeBarBackground">
                    <div id="KeepWhatchingTimeBar" style={{width: `${percentage}%`}}/>
                </div>
                <div id="KeepWhatchingTimeText">
                    <p>T1:E2</p> 
                    <div 
                        style={{backgroundImage: `url("${imageInfo}")`}}
                        onClick={() => {
                            window.open(`${base_url}/description/${pk}`, "_self")
                        }}/>      
                </div>
            </div>
        </>
    );
};

export { KeepWhatching }
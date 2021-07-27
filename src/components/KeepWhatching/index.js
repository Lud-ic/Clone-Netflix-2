import "./style.scss";
 
const KeepWhatching = ({ pk, percentage, image, imagePlay, imageInfo }) => {

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
                            window.open(`${process.env.REACT_APP_HOST}/description/${pk}`, "_self")
                        }}/>      
                </div>
            </div>
        </>
    );
};

export { KeepWhatching }
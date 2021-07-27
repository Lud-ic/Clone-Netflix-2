import "./style.scss";

const SearchResult = ({ name, image, data }) => {

    console.log(data)

    return (
        <>
            <div id="sarch-result">
                <div id="sarch-image" style={{
                        backgroundImage: `url(${image})`
                }}></div>
                <div id="sarch-details">
                    <div id="sarch-details-name">
                        { name }
                    </div>
                    <div id="sarch-details-play" style={{
                        backgroundImage: `url(${"../../assets/SearchResult/play.png"})`
                    }}>
                    </div>
                </div>
            </div>
        </>
    );
};

export { SearchResult };

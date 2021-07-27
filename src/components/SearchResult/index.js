import "./style.scss";

const SearchResult = ({ name, image }) => {

    const styled = {
        backgroundImage: image ? `url(${image})` : `url("../../assets/SearchResult/background-default.jpg")`,
        backgroundSize: image ? "100%" : "120%"
    }
 
    return (
        <>
            <div id="search-result">
                <div id="search-image" style={styled}/> 
                <div id="search-details">
                    <div id="search-details-name">
                        { name }
                    </div>
                    <div id="search-details-play" style={{
                        backgroundImage: `url(${"../../assets/SearchResult/play.png"})`
                    }}/>
                </div>
            </div>
        </>
    );
};

export { SearchResult };

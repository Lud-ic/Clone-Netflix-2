import { fetchSingleShowName } from "../../services";
import { useEffect, useState } from "react";
import "./style.scss";
import { SearchResult } from "../../components/SearchResult";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [InputValue, SetInputValue] = useState(undefined);
    const [response, SetResponse] = useState(InputValue);
    const history = useHistory();

    useEffect(() => {
        const fetchAsync = async () => {
            const data = await fetchSingleShowName(InputValue);
            SetResponse(data);
        };
        fetchAsync();
    }, [InputValue]);

    return (
        <>
            <div id="search">
                <div id="search-top">
                    <div
                        id="search-top-left"
                        style={{
                            backgroundImage: `url(${"../../assets/search/back-to-home.svg"})`,
                        }}
                        onClick={() => {
                            history.goBack();
                        }}
                    />
                    <div
                        id="search-top-right"
                        style={{
                            backgroundImage: `url(${"../../assets/search/user-profile.png"})`,
                        }}
                    />
                </div>
                <div id="search-search">
                    <div
                        id="search-search-top-left"
                        style={{
                            backgroundImage: `url(${"../../assets/search/search.png"})`,
                        }}
                    />
                    <div
                        id="search-search-top-right"
                        style={{
                            backgroundImage: `url(${"../../assets/search/microphone.svg"})`,
                        }}
                    />
                    <input
                        onChange={(event) => {
                            SetInputValue(event.target.value);
                        }}
                        placeholder="Busque por série, filme, gênero,..."
                    />
                </div>

                <h4>Principais Buscas</h4>

                {response &&
                    response?.map((data) => {
                        const { id, name, image } = data.show;

                        return (
                            <SearchResult
                                key={`SearchResult${id}`}
                                name={name}
                                image={image?.medium}
                            />
                        );
                    })}
            </div>
        </>
    );
};
export { Search };
